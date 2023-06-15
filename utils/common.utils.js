module.exports = {
    removeTrailingCommas:(jsonString)=> {
        const regex = /,\s*([\]}])/gm;
        let fixedJsonString = jsonString.replace(regex, "$1");
      
        // Handle nested objects recursively
        while (
          fixedJsonString !==
          (fixedJsonString = fixedJsonString.replace(/\{(\s*)\}/g, "{}"))
        ) {}
      
        return fixedJsonString;
      }
      
}