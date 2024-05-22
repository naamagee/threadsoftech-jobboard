import { fetchCompanies, fetchJobs, fetchLogo } from '../firebase';

async function _fetchCompanies() {
  const res = await fetchCompanies();

  if (res === 0) {
    throw new Error('Failed to fetch companies data');
  }

  return res;
}

async function _fetchJobs() {
  const res = await fetchJobs();

  if (res === 0) {
    throw new Error('Failed to fetch jobs data');
  }

  return res;
}

async function _fetchLogo(filename) { 
  const res = await fetchLogo(filename);

  if (res === 0) {
    throw new Error('Failed to fetch logo');
  }

  return res;
}

export default async function Home() {
  const companies = await _fetchCompanies(), jobs = await _fetchJobs();

  async function CompanyLogo({ filename }) {
    const url = await _fetchLogo(filename);

    return filename !== 1 ? <img height={50} src={url} /> : <img />;
  };

  return (
    <main>
      <div style={{
        marginLeft: 250, marginTop: 150
      }}>
        <h2>:3</h2>

        <br />

        <p>
          ╱|、<br />
          (˚ˎ 。7  <br />
          |、˜〵    <br />
          じしˍ,)ノ
        </p>
      </div>

      <div style={{ outline: '1px solid black' }}>
        <p>companies</p>
        {companies && (
          <ul>
            {companies.map((c, i) => (
              <li key={i}>
                <CompanyLogo filename={c.companyLogoId} />
                {JSON.stringify(c)}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ outline: '1px solid black' }}>
        <p>jobs</p>
        {jobs && (
          <ul>
            {jobs.map((j, i) => (
              <li key={i}>{JSON.stringify(j)}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
