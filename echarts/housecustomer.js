var tangshan = "tangshan.json";

$(function() {
    var myChart = echarts.init(document.getElementById('echar'));
    $.getJSON(tangshan, function(geoJson) {
        echarts.registerMap('tangshan', geoJson);
        myChart.hideLoading();
        var geoCoordMap = {
            // '开平区': [118.269826,39.677914],
            //
            // '古冶区': [118.447475,39.737864],
            //
            // '迁西县': [118.314094,40.148983]
        }
        var data = [
      
        ];
        // var max = 480, min = 9; // todo
        // var maxSize4Pin = 100, minSize4Pin = 20;

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };



        option = {
            title : {
                text: '',
                subtext: '',
                left: 'center',
                top: 'top',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {},
            legend: {
                left: 'left',
                data: ['强', '中', '弱'],
                textStyle: {
                    color: '#ccc'
                }
            },
            backgroundColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#0f2c70' // 0% 处的颜色
                }, {
                    offset: 1, color: '#091732' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
            geo: {
                map: 'tangshan',
                show: true,
                roam: true,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#091632',
                        borderColor: '#1773c3',
                        shadowColor: '#1773c3',
                        shadowBlur: 20
                    }
                }
            },
            series: [
                {
                    type: 'map',
                    map: 'tangshan',
                    geoIndex: 1,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: true, // 存在legend时显示
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#0f2c70'
                        }
                    },
                    data:[
                    ]
                },
                {
                    name: '城市',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 20;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                },
                {
                    name: '前5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function (val) {
                        return val[1] / 20;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            ]
        }
        myChart.setOption(option);
    });
});