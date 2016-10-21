/**
 * Created by Administrator on 2016/10/20.
 */
var path = require("path");
module.exports = {
    entry:__dirname + "/js/demo.js",	//需要打包的文件路径
    output:{
        path:"build/",	//打包后的文件存放的路径
        filename:"bundle.js"	//打包的文件名
    },
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module:{
        loaders:[
            {test:/.\scss$/,loaders:["style","css","scss"]},
            {test:/\.(png|jpg)$/,loader:"url"}
        ]
    }

}