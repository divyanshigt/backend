class apierror extends error{
    constructor(
        statusCOde,
        message="Something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statuscode=statuscode,
        this.datra=null
        this.message=message
        this.success=false;
        this.error=this.eror
        if(stack){
            this.stack=stack
        }else{
            error.captureStsckTrac(this,his.constructor)
        }
}