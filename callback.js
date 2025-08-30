const demo = (data, callback) => {
    const newdata = data.toUpperCase();
    callback(newdata);
}

demo("sayeed", console.log)