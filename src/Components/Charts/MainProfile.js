import React from "react";
class MainProfile extends React.Component{
    render(){
        var rank,rating=0,handle,firstName,lastName,city,organization,pic;
        for(var i=0;i<this.props.data.length;i++){
            handle=this.props.data[i].handle;
            firstName=this.props.data[i].firstName;
            lastName=this.props.data[i].lastName;
            rank=this.props.data[i].rank;
            city=this.props.data[i].city;
            organization=this.props.data[i].organization;
            rating=this.props.data[i].rating;
            pic=this.props.data[i].titlePhoto;
        }
        var len=this.props.data.length;
        return(
            <div>
                {len>0 && 
                    <div className="col center s12 m6 l6 z-depth-2" style={{borderRadius:"10px"}}>
                        <table style={{backgroundColor: "#333946"}}>
                            <thead>
                                <tr>
                                    <th className="center" style={{color: "blanchedalmond"}}>Main profile of {handle}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="center" style={{borderRadius:"10px"}}>
                                    <td><img src={pic} height={100} width={100} /></td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td style={{color: "blanchedalmond"}}>First Name</td>
                                    <td className="right" style={{color: "blanchedalmond"}}>{firstName}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td style={{color: "blanchedalmond"}}>Last Name</td>
                                    <td className="right" style={{color: "blanchedalmond"}}>{lastName}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td style={{color: "blanchedalmond"}}>Rank</td>
                                    <td className="right" style={{color: "blanchedalmond"}}>{rank}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td style={{color: "blanchedalmond"}}>Rating</td>
                                    <td className="right" style={{color: "blanchedalmond"}}>{rating}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td style={{color: "blanchedalmond"}}>City</td>
                                    <td className="right" style={{color: "blanchedalmond"}}>{city}</td>
                                </tr>
                                <tr className="hoverable" style={{borderRadius:"10px"}}>
                                    <td style={{color: "blanchedalmond"}}>Organization</td>
                                    <td className="right" style={{color: "blanchedalmond"}}>{organization}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        )
    }
}
export default MainProfile
