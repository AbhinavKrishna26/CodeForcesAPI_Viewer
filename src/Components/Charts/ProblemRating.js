import React from "react";
import {Chart} from "react-google-charts";

class ProblemRating extends React.Component{

    render() {
        const prob={
             
        };
         var titleTextStyle = {
          fontSize: 18,
          color: 'blanchedalmond',
          bold: false
        };
        for(var i=0;i<this.props.data.length;i++){
            const str= this.props.data[i].problem.rating;
            if(this.props.data[i].verdict==="OK") {
               if(str!==undefined){
                    if(prob[str]===undefined) {
                        prob[str]=1;
                }
                    else ++prob[str];
               }
            }
        }
        const d = []
        const data = [["Rating","Count",{role: "style"}]];
        for (var x in prob) {
            d.push([parseInt(x),prob[x]])
        }
        d.sort(sortFunction);

        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0;
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }
        for(var j=0;j<d.length;j++){
            if(j&1)
                data.push([d[j][0].toString(),d[j][1],'#b87333'])
            else
                data.push([d[j][0].toString(),d[j][1],'gold'])
            
        }
        const len = this.props.data.length;
        return(
            <div>
                {len > 0 &&
                    <Chart
                          width={'100%'}
                          height={'300px'}
                          className="center col s12 z-depth-2"
                          chartType="ColumnChart"
                          style={{paddingTop:20}}
                          data={data}
                          options={{
                              chartArea:{
                                            width: '80%',
                                            height: '150',
                                            },
                                chart: {
                                    
                                    legend:"none",
                                        },
                                title: 'Problem ratings of '+ this.props.user,
                                bar: { groupWidth: '95%' },
                                legend: { position: 'none' },
                                backgroundColor: '#333946',
                              titleTextStyle: titleTextStyle,

                          }}

                    />
                }
            </div>
        )
    }

}
export default ProblemRating