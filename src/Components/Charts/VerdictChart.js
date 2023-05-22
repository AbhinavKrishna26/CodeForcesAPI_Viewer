import React from "react";
import Chart from "react-google-charts";

class VerdictChart extends React.Component{

    render() {
        const mp ={
            "OK":0,
            'WRONG_ANSWER':0,
            'TIME_LIMIT_EXCEEDED':0,
            'MEMORY_LIMIT_EXCEEDED':0,
            'RUNTIME_ERROR':0,
            'COMPILATION_ERROR':0,
            'SKIPPED':0,
            'CHALLENGED':0,
            "PARTIAL":0,
            "IDLENESS_LIMIT_EXCEEDED":0,

        };
        for(var i=0;i<this.props.data.length;i++){
            mp[this.props.data[i].verdict]++;
        }
        var verSliceColors = [];
        verSliceColors.push({ color: '#4CAF50' });
        verSliceColors.push({ color: '#f44336' });
        verSliceColors.push({ color: '#2196F3' });
        verSliceColors.push({ color: '#673AB7' });
        verSliceColors.push({ color: '#FF5722' });
        verSliceColors.push({ color: '#607D8B' });
        verSliceColors.push({ color: '#EEEEEE' });
        verSliceColors.push({ color: '#E91E63' });
        verSliceColors.push({});
        var titleTextStyle = {
          fontSize: 18,
          color: 'blanchedalmond',
          bold: false
        };
        const len = this.props.data.length;
        const title = 'Verdict of  '+this.props.user;
        return(
            <div>
            {len>0 &&
                    <Chart
                        width={'100%'}
                        height= {'400px'}
                        className="col center s12 z-depth-2"
                        chartType="PieChart"

                        data={[
                            ['Task', 'Stats'],
                            ['WA', mp.WRONG_ANSWER],
                            ['Time Limit Exceeded', mp.TIME_LIMIT_EXCEEDED],
                            ['Memory Limit Exceeded', mp.MEMORY_LIMIT_EXCEEDED],
                            ['AC', mp.OK],
                            ['Partial', mp.PARTIAL],
                            ['Idleness Limit Exceeded', mp.IDLENESS_LIMIT_EXCEEDED],
                            ['Runtime Error', mp.RUNTIME_ERROR],
                            ['Skipped',mp.SKIPPED],
                            ['Challenged',mp.CHALLENGED],

                        ]}
                        options={{
                            legend: {
                              position: 'right',
                              alignment: 'center',
                              textStyle: {
                                fontSize: 12,
                                fontName: 'Roboto',
                                color: 'blanchedalmond'
                              }
                            },
                            slices: verSliceColors,
                            fontName: 'Roboto',
                            chartArea:{
                            width: '100%',
                            height: '320', 
                            },
                            title: title,
                            pieHole:0.5,
                            tooltip: {
                              text: 'percentage'
                            },
                            titleTextStyle: titleTextStyle,
                            backgroundColor: '#333946',
                            pieSliceText: 'label',
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
            }
            </div>
        )
    }

}
export default VerdictChart