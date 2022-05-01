import React, { useState } from 'react'
import Teams from '../core/Teams'

const COLORS = ['fu-orange', 'fu-blue', 'fu-sand', 'fu-green', 'fu-grey']

const FuCard = ({ color, data }) => {

    const checkColor = COLORS.includes(color) ? color : COLORS[3]

    const cleanTeam = (name) => {
        var cleanName = name.toLowerCase().replaceAll(" ", "-")
        var url = Teams.find(e => e.name === cleanName)
        return url.url
    }

    const teamWinner = (team) => {
        if(team){
            return true
        }else{
            return false
        }
    }

    return (
        <>
            {data ?
                <>
                    <div className='fu-card-wrapper pad-b-l'>
                        <div className='fu-card'>
                            {console.log(data)}
                            <div className={`fu-card-left ${teamWinner(data.home_team_win) ? 'fu-card-win-left '+ checkColor : null }`}>
                                <div className='fu-card-img'>
                                    <div className='card-logo-large'>
                                        <img className='card-img-logo' src={cleanTeam(data.home_team_name)} />
                                    </div>
                                </div>
                                <div className='fu-card-content'>
                                    <p className='large-text bold-text pad-l-m'>{data.pts_home}</p>
                                </div>
                            </div>
                            <div className={`fu-card-right ${!teamWinner(data.home_team_win) ? 'fu-card-win-right '+ checkColor : null }`}>
                                <div className='fu-card-img'>
                                    <div className='card-logo-large'>
                                        <img className='card-img-logo' src={cleanTeam(data.away_team_name)} />
                                    </div>
                                </div>
                                <div className='fu-card-content'>
                                    <p className='large-text bold-text pad-r-m'>{data.pts_away}</p>
                                </div>
                            </div>
                        </div>
                        <div className='fu-card-desc pad-t-m'>
                            <table className='fu-card-table'>
                                <tbody>
                                    <tr className='fu-card-table-line'>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{(Math.round(data.ft_pct_home * 100)).toFixed(2)} %</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>Free throw</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{(Math.round(data.ft_pct_away * 100)).toFixed(2)} %</p>
                                        </td>
                                    </tr>
                                    <tr className='fu-card-table-line'>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{data.ast_home}</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>Assist</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{data.ast_away}</p>
                                        </td>
                                    </tr>
                                    <tr className='fu-card-table-line'>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{(Math.round(data.fg_pct_home * 100)).toFixed(2)} %</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>Field goal</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{(Math.round(data.fg_pct_away * 100)).toFixed(2)} %</p>
                                        </td>
                                    </tr>
                                    <tr className='fu-card-table-line'>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{data.reb_home}</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>Rebonds</p>
                                        </td>
                                        <td className='fu-card-table-cell'>
                                            <p className='medium-text regular-text'>{data.reb_away}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </> :
                <>

                </>
            }   
        </>
    )
}

export default FuCard