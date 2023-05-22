import React from "react";
class Contest extends React.Component{

    render() {
            var best = 1e10;
            var worst = -1e10;
            var maxUp = 0;
            var maxDown = 0;
            var con_url = 'https://codeforces.com/contest/';
            this.props.user_data.forEach(function(con) {
            if (con.rank < best) {
              best = con.rank;
            }
            if (con.rank > worst) {
              worst = con.rank;
            }
            var ch = con.newRating - con.oldRating;
            if (ch > maxUp) {
              maxUp = ch;
            }
            if (ch < maxDown) {
              maxDown = ch;
            }
            });
            var problems = {};
            for (var i = this.props.data.length - 1; i >= 0; i--) {
                var sub = this.props.data[i];
                var problemId = sub.problem.contestId + '-' + sub.problem.index;
                if (problems[problemId] === undefined) {
                    problems[problemId] = {
                        attempts: 1,
                        solved: 0
                    };
                } else {
                    if (problems[problemId].solved === 0) problems[problemId].attempts++;
                }

                if (sub.verdict === 'OK') {
                    problems[problemId].solved++;
                }
            }
                var maxAttempt = 0;
                var maxAc = '';
                var unsolved = [];
                for (var p in problems) {
                    if (problems[p].solved === 0) unsolved.push(p);

                    if (problems[p].attempts > maxAttempt) {
                        maxAttempt = problems[p].attempts;
                    }
                    if (problems[p].solved > maxAc) {
                        maxAc = problems[p].solved;
                    }
                }
                const unsolvedList =unsolved.map(p=>{
                    if(p!==undefined) {
                        return (
                            <div className="col s3 m2 l2"><a href={con_url+p.split('-')[0]+'/problem/'+p.split('-')[1]}  style={{display:"inline-block"}}>
                                {p}
                            </a>
                            </div>
                        )
                    }
                })
        return(
            <div >
                {unsolved.length>0&&
                <div className="row z-depth-2" style={{padding:20}}>
                    <span style={{ color: "blanchedalmond",fontWeight: 500,fontSize: "18px",marginLeft:"50"}}>Unsolved</span>
                    <div >{unsolvedList}</div>
                </div>
                }
            </div>
        )
    }

}
export default Contest