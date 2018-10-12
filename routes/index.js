var express = require('express');
var router = express.Router();
var async = require("async");
var Models = require('../models');
var NavBar = Models.NavBar;
var Topics = Models.Topics;
var SideBar = Models.SideBar;
var Authors = Models.Authors;
var Article = Models.Article;
/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {}, page = {};
  // var modelsObj = {
  //   NavBar,
  //   Topics,
  //   SideBar,
  //   Authors,
  //   Article
  // }
  // var tasks = ['NavBar', 'Topics', 'SideBar', 'Authors', 'Article'];

  //第一种 promise
  // getData(NavBar).then(function(result){
  //   data.NavBar = result;
  //   return getData(Topics);
  // }).then(function(result){
  //   data.Topics = result;
  //   return getData(SideBar);
  // }).then(function(result){
  //   data.SideBar = result;
  //   return getData(Authors);
  // }).then(function(result){
  //   data.Authors = result;
  //   return getData(Article);
  // }).then(function(result){
  //   data.Article = result;
  //   console.log(data,"data")
  //   res.render('./index/index',data);
  // }).catch(function(err){

  // })

  //第二种 使用async 

  async function getIndexData(){
    data.NavBar = await  getData(NavBar);
    data.Topics = await  getData(Topics);
    data.SideBar = await  getData(SideBar);
    data.Authors = await  getData(Authors);
    data.Article = await  getArticle(req);
    page.Total = await  getTotal();
    page.index = req.query.index?parseInt(req.query.index) :1;
    
    data.page = page;
    console.log(data.page,"xxxx")
    res.render('./index/index',data);
  }
  getIndexData();

  //使用第三方库async
  // async.map(tasks, function(item, callback){
  //   modelsObj[item].find({},function(err, result){
  //     data[item] = result;
  //     if(item=='Article'){
  //       res.render('./index/index',data)
  //     }
  //   })
  // },function(err){
  //   console.log(err);
  // })

    
});

router.post('/getSearch',function(req,res,err){
  var search = req.body.search;
  console.log(search,"search")
  const reg = new RegExp(search, 'i') //不区分大小写
  var _filter = {
    $or: [
      {'title': {$regex:reg}},
      {'des': {$regex:reg}},
      {'author': {$regex:reg}},
    ]
  }
  Article.find(_filter,function(err, result){
    res.json(result);
  })
})


function getData(model){
  return new Promise(function(resolve, reject){
    model.find({}, function(err, result){
      resolve(result);
      if(err){
        reject(err);
      }
    })
  })
}

function getArticle(req){
  var index=req.query.index?parseInt(req.query.index) :1;
  var size=req.query.size?parseInt(req.query.size):5;
  return new Promise(function(resolve, reject){
    Article.find({}).skip((index-1)*size).limit(size).exec(function(err, result){
      resolve(result);
      if(err){
        reject(err);
      }
    })
    
  })
}

function getTotal(){
  return new Promise(function(resolve, reject){
    Article.find().estimatedDocumentCount(function(err, result){
      resolve(result);
      if(err){
        reject(err);
      }
    })
  })
}


console.log(require.extensions);

module.exports = router;
