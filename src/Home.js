import React from 'react';
import Searchbar from "./Components/Searchbar";
import Axios from "axios";
import VerdictChart from "./Components/Charts/VerdictChart";
import Tags from "./Components/Charts/Tags";
import MainProfile from "./Components/Charts/MainProfile";
import ProblemRating from "./Components/Charts/ProblemRating";
import Contest from "./Components/contest";
class Home extends React.Component{
    
    state = {
        search:"",
        data:[],
        mainprof:[],
        user_data:[],
        error:false,
    };
    addSearch = (search)=> {
        const url = "https://codeforces.com/api/user.status?handle="+search;
        Axios.get(url)
            .then(res=>{
                this.setState({
                    data:res.data.result,
                    search:search
                })

            })
            .catch(error=>{
                this.setState({
                    error:true
                })
                console.log(this.state.error)
            });
        Axios.get("https://codeforces.com/api/user.rating?handle="+search)
            .then(res=>{
                this.setState({
                    user_data:res.data.result
                })
            })
        Axios.get(" https://codeforces.com/api/user.info?handles="+search)
            .then(res =>{
                this.setState({
                    mainprof:res.data.result
                })
            });
        

    };

    render() {

      return(
            <div>
                <Searchbar addSearch={this.addSearch} />
                {this.state.error&&
                    <div>
                        <p className="center">Couldn't find user.</p>
                    </div>
                }
                <div className = "row container" >
                    <MainProfile data={this.state.mainprof} user={this.state.search} />
                </div>
                <div className="row container">
                    <VerdictChart data={this.state.data} user={this.state.search} />
                </div>
                <div className="row container">
                    <ProblemRating data={this.state.data} user={this.state.search}/>
                </div>
                <div className="row container">
                    <div >
                        <Tags data={this.state.data} user={this.state.search}/>
                    </div>
                </div>
                <div className="row container">
                    <Contest user={this.state.search} user_data={this.state.user_data} data={this.state.data}/>
                </div>
            </div>
  )
 }
};

export default Home;