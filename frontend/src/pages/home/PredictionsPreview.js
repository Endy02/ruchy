import React from 'react'
import Button from '../../components/Button'


const PredictionsPreview = () => {
  const homeTeam = {
    'name': 'chicago-bulls',
    'url': '/assets/images/teams/chicago-bulls.svg'
  }

  const awayTeam = {
    'name': 'boston-celtics',
    'url': '/assets/images/teams/boston-celtics.svg'
  }
  return (
    <>
      <div className='container-full-width flex-col-center full-height'>
        <div className='spe-title flex-row-start'>
          <h2 className='spe-right spe-bg-sand large-text bold-text white-text'>Predictions</h2>
        </div>
        <div className='full-gutter'>
          <div className='container-grid-2'>
            <div className='grid-item flex-col-center'>
              <div className='container-content flex-col-center'>
                <div className='fu-card-wrapper pad-b-l'>
                  <div className='fu-card'>
                    <div className='fu-card-left fu-card-win-left fu-sand'>
                      <div className='fu-card-img'>
                        <div className='card-logo-large'>
                          <img className='card-img-logo' src={homeTeam.url} />
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
                            <p className='medium-text regular-text'>78,24 %</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>Free throw</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>70,18 %</p>
                          </td>
                        </tr>
                        <tr className='fu-card-table-line'>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>27</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>Assist</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>20</p>
                          </td>
                        </tr>
                        <tr className='fu-card-table-line'>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>55,32 %</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>Field goal</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>40,45 %</p>
                          </td>
                        </tr>
                        <tr className='fu-card-table-line'>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>36</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>Rebonds</p>
                          </td>
                          <td className='fu-card-table-cell'>
                            <p className='medium-text regular-text'>27</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Button buttonSize="btn-large" mode="btn-regular" buttonStyle='btn-sand' link='/statistics'>See more</Button>
              </div>
            </div>
            <div className='grid-item flex-col-center mobile'>
              <img src='/assets/images/kd_shape.svg' className='rectangle-img-small' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PredictionsPreview