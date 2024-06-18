import React from 'react'
import Button from '../../../design/Button/Button'

const ListItem = ({ children }: { children: React.ReactNode }) => {

    return (
      <>
      {/* @junaama fix adding truncate */}
        <p className="text-black font-bold">{children}</p>
        <div className="gap-2 flex">
          {/* <Button>
            SAVE
          </Button> */}
          <Button >
            APPLY
          </Button>
        </div>
        </>
    );
}
export default ListItem