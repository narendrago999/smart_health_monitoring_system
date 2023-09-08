const BodyData = require("../models/dataModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");



//create Product  --Admin
exports.createData = catchAsyncErrors( async (req,res,next)=>{

    req.body.user = req.user.id

    const data = await BodyData.create(req.body);

    res.status(201).json({
        success:true,
        data
    })
});

//get All Products
exports.getAllData = catchAsyncErrors( async (req,res)=>{
   

    const apiFeature = new ApiFeatures(BodyData.find(),req.query).search().filter();
    const datas = await apiFeature.query;
    res.status(200).json({
        success:true,
        datas,
    })

});

//update Product --Admin

exports.updateData = catchAsyncErrors( async (req,res,next)=>{
    let data = BodyData.findById(req.params.id);
    if(!data){
        return next(new ErrorHandler("Data not found",404));
    }
    data = await BodyData.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        data
    })
});


// Delete Product 
exports.deleteData = catchAsyncErrors( async(req,res,next)=>{
    const data = await BodyData.findById(req.params.id);

    if(!data){
        return next(new ErrorHandler("Data not found",404));
    }
    await data.remove();
    res.status(200).json({
        success:true,
        message:"Data Delete Successfully"
    })
});

// Get single product details 

exports.getDataDetails = catchAsyncErrors( async (req,res,next)=>{
    const data = await BodyData.findById(req.params.id);

    if(!data){
        return next(new ErrorHandler("Data not found",404));
    }
    res.status(200).json({
        success:true,
        data,
        
    })
});