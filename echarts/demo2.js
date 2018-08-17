var tianjin = "tangshan.json";

$(function() {
    var myChart = echarts.init(document.getElementById('echar'));
    $.get(tianjin, function(tjJson) {
        echarts.registerMap('tianjin', tjJson);
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'tianjin'
            }]
        });

        var geoCoordMap = {
            '上海': [121.4648,31.2891],
            '包头': [110.3467,41.4899],
            '太原': [112.3352,37.9413],
            '广州': [113.5107,23.2196],
            '福州': [119.4543,25.9222]
        };

        var BJData = [
            [{name:'北京'}, {name:'上海',value:95}],
            [{name:'北京'}, {name:'广州',value:90}],
        ];

        var SHData = [
            [{name:'上海'},{name:'包头',value:95}],
        ];

        var GZData = [
            [{name:'广州'},{name:'福州',value:95}],
            [{name:'广州'},{name:'太原',value:90}],
        ];

        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        var arcAngle = function(data) {
            var j, k;
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                if (dataItem[1].id == 1) {
                    j = 0.2;
                    return j;
                } else if (dataItem[1].id == 2) {
                    k = -0.2;
                    return k;
                }
            }
        }

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
            series.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        console.log(series)

        option = {
            backgroundColor: '#404a59',
            title : {
                text: '模拟迁徙',
                subtext: '数据纯属虚构',
                left: 'center',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter:function(params, ticket, callback){
                    console.log(params);
                    if(params.seriesType=="effectScatter") {
                        return "线路："+params.data.name+""+params.data.value[2];
                    }else if(params.seriesType=="lines"){
                        return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                    }else{
                        return params.name;
                    }
                }
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data:['北京 Top10', '上海 Top10', '广州 Top10'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'multiple',
            },
            geo: {
                map: 'tianjin',
                label: {
                    emphasis: {
                        show: true,
                        color:'#fff'
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series
        };


        myChart.setOption(option);

    })
});