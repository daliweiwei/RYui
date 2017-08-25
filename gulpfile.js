/*
* @authors liweiliang QQ:406320591(406320591@QQ.com).
* @date 2017-08-25,
* @RYui gulpfile.js version 1.0.0
* @liweiliang Inc. All Rights Reserved
*/
var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'), //压缩html
	cleancss = require('gulp-clean-css'), // 压缩css
	imagemin = require('gulp-imagemin'), //图片压缩
	uglify = require('gulp-uglify'), //压缩js
	domsrc = require('gulp-dom-src'), //dom-流
	concat = require('gulp-concat'), //文件合并
	cheerio = require('gulp-cheerio'), // //替换文件中文件的地址
	sourcemaps = require('gulp-sourcemaps'), //生成sourcemap 文件 调试用
	livereload = require('gulp-livereload'); //自动刷新页面
//html页面压缩设置
var optHtml = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
};
