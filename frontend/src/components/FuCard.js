import React from 'react'

const COLORS = ['fu-orange','fu-blue','fu-sand','fu-green','fu-grey']

const FuCard = ({color, homeTeam, awayTeam, data}) => {
  
  const checkColor = COLORS.includes(color) ? color : COLORS[3]

  return (
    <>
      <div className='fu-card-wrapper pad-b-l'>
        <div className='fu-card'>
          <div className={`fu-card-left fu-card-win-left ${checkColor}`}>
            <div className='fu-card-img'>
              <div className='card-logo-large'>
                <img className='card-img-logo' src={homeTeam.url}/>
              </div>
            </div>
            <div className='fu-card-content'>
              <p className='large-text bold-text pad-l-m'>85 %</p>
            </div>
          </div>
          <div className='fu-card-right'>
            <div className='fu-card-img'>
              <div className='card-logo-large'>
                <img className='card-img-logo' src={awayTeam.url} />
              </div>
            </div>
            <div className='fu-card-content'>
              <p className='large-text bold-text pad-r-m'>15 %</p>
            </div>
          </div>
        </div>
        <div className='fu-card-desc pad-t-m'>
          <table className='fu-card-table'>
            <tbody>
              <tr className='fu-card-table-line'>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>78 %</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>Free throw</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>22 %</p>
                </td>
              </tr>
              <tr className='fu-card-table-line'>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>78 %</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>Assist</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>22 %</p>
                </td>
              </tr>
              <tr className='fu-card-table-line'>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>78 %</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>Field goal</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>22 %</p>
                </td>
              </tr>
              <tr className='fu-card-table-line'>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>78 %</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>Rebonds</p>
                </td>
                <td className='fu-card-table-cell'>
                  <p className='medium-text regular-text'>22 %</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default FuCard