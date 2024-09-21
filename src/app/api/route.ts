import { google } from 'googleapis';

export async function GET() {
    try {
        const glAuth = await google.auth.getClient({
            projectId: process.env.FIRESTORE_PROJECTID,
            credentials: {
                "type": "service_account",
                "project_id": process.env.FIRESTORE_PROJECTID,
                "private_key_id": process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
                "private_key": process.env.GOOGLE_SHEETS_PRIVATE_KEY,
                "client_email": process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                "client_id": process.env.GOOGLE_SHEETS_CLIENT_ID,
                "universe_domain": "googleapis.com"


            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });
        const sheets = google.sheets({ version: 'v4', auth: glAuth });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'Sheet1', // Update this to match your sheet name
        });
        const rows = response.data.values;

        if (rows?.length) {
            const headers = rows[0];
            const nameIndex = headers.indexOf('NAME');
            const descriptionIndex = headers.indexOf('DESCRIPTION');
            const locationIndex = headers.indexOf('LOCATION');
            const websiteIndex = headers.indexOf('WEBSITE');
            const introIndex = headers.indexOf('CAN INTRO');

            // Filter and map the rows
            return Response.json(rows.slice(1) // Skip the header row
                .filter(row => {
                    // Check if required rows are present
                    return row[nameIndex] && row[nameIndex].trim() !== '' &&
                        row[descriptionIndex] && row[descriptionIndex].trim() !== '' && row[locationIndex] && row[locationIndex].trim() !== '' &&
                        row[websiteIndex] && row[websiteIndex].trim() !== '';
                })
                .map(row => ({
                    name: row[nameIndex],
                    description: row[descriptionIndex],
                    location: row[locationIndex],
                    website: row[websiteIndex],
                    // Include website only if it exists
                    ...(row[introIndex] && { canIntro: row[introIndex] })
                })));
        }
    } catch (err) {
        console.log(err);
    }
    const data: Array<null> = []
    return Response.json({ data })

}