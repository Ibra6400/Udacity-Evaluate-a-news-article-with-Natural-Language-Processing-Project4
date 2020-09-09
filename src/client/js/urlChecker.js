function CheckingURL(URL) {
    var URLpattern = new RegExp('^(https?:\\/\\/)?'+  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ '((\\d{1,3}\\.){3}\\d{1,3}))'+  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+   '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ '(\\#[-a-z\\d_]*)?$','i');
    if(URLpattern.test(URL)){
        return true;
    } else{
        return false;
    }
 }
export { CheckingURL }
