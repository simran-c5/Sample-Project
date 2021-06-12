function customToastSuccess(heading,text) {
    $.toast({
        heading:heading,
        text: text,
        bgColor: 'green',
        textColor: 'white',
        icon: 'success',
        position: 'top-right',
        loader: false,
        stack: false
    })
}

function customToastError(heading,text) {
    $.toast({
        heading:heading,
        text: text,
        bgColor: 'crimson',
        textColor: 'white',
        icon: 'error',
        position: 'top-right',
        loader: false,
        stack: false
    })
}