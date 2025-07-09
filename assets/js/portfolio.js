// Chart 1
document.addEventListener("DOMContentLoaded", () => {
  var budgetChart = echarts.init(document.querySelector("#budgetChart")).setOption({
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [{
          name: 'Sales',
          max: 6500
        },
        {
          name: 'Administration',
          max: 16000
        },
        {
          name: 'Information Technology',
          max: 30000
        },
        {
          name: 'Customer Support',
          max: 38000
        },
        {
          name: 'Development',
          max: 52000
        },
        {
          name: 'Marketing',
          max: 25000
        }
      ]
    },
    series: [{
      name: 'Budget vs spending',
      type: 'radar',
      data: [{
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }]
  });
});

// Chart 2
document.addEventListener("DOMContentLoaded", () => {
  echarts.init(document.querySelector("#trafficChart")).setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [{
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 1048,
          name: 'Search Engine'
        },
        {
          value: 735,
          name: 'Direct'
        },
        {
          value: 580,
          name: 'Email'
        },
        {
          value: 484,
          name: 'Union Ads'
        },
        {
          value: 300,
          name: 'Video Ads'
        }
      ]
    }]
  });
});