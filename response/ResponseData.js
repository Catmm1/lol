const ResponseMsg = {
    SUCCESS: { code: "200", msg: "操作成功" },
    FAILED: { code: "999999", msg: "操作失败" },
    ParamError: { code: "000001", msg: "参数错误！" },
    FileEmpty: { code: "000400", msg: "上传文件为空" }
};


module.exports.ResponseData =(msg,data)=>{
    if(msg==200) rspmsg = ResponseMsg.SUCCESS
    else rspmsg = ResponseMsg.FAILED
    return Response = {
        "rspCode" : rspmsg.code,
        "rspMsg" : rspmsg.msg,
        "data" : data
    }
}
