var s = (function () {
    // 参数：传递给单例的一个参数集合
    function public(args) {
        //设置args变量为接收的参数或者为空（如果没有提供的话）
        var args = args || {};
        //设置name参数
        this.name='s'
        //设置pointX的值
        this.pointX=args.pointX || 6;//从接收的参数里获取，或者设置为默认值
        //设置pointY的值
        this.pointY = args.pointY || 10;
    }
    //实例容器
    var instance
})