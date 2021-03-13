

//Got really stuck here.. kept throwing an error 
// 3:71  error  Don't use `{}` as a type. `{}` actually means "any non-nullish value" 

/*eslint-disable */
export type Constructor = new (...args:any[]) => {};
/*eslint-enable */