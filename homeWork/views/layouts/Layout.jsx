const React = require('react')

function Layout(props){
 return(
    <html>
        <head>
            <title>{!props.vegetable.name?'Hello From vegetables': props.vegetable.name}</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            {props.children}
        </body>
    </html>
 )
}

module.exports = Layout