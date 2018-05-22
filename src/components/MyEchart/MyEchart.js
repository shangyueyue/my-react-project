import React from 'react';
import propTypes from 'prop-types';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import './style.css';

// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');


class MyEchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    this.renderMyEchart();
  }
  renderMyEchart(){
    const myChart = echarts.init(document.getElementById('myEchart'));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    });
  }
  render() {
    return (
      <div className="myChart">
        <div id="myEchart" style={{ height: '500px', width: '360px' }} />
      </div>
    );
  }
}


export default MyEchart;
