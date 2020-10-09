{
    "parser":  "babel-eslint",
    "plugins": [ "react" ]
    "rules": {
         "semi": "error",
        "no-console": "off",
        "no-alert": "error"
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            },
            
            {
                "selector": "FunctionExpression",
                "message": "Function expressions are not allowed."
            }
        ],
        "curly": [ "error", "multi" ],
        "quotes": ["error", "double" ],
        "no-unexpected-multiline": "error"
        
        
        
        
        
             }
    
 }