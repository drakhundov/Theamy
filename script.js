let dark_theme = "rgb(40, 42, 53)"
let light_theme = "rgb(240, 255, 255)"

let current_theme = 0

function toggle_color()
{
    let selection_box = document.getElementById("selection")

    if (current_theme == 0)
    {
        selection_box.style.marginRight = "0"
        selection_box.style.marginLeft = "auto"
        document.body.style.backgroundColor = light_theme
        current_theme = 1
    }
    else
    {
        selection_box.style.marginLeft = "0"
        selection_box.style.marginRight = "auto"
        document.body.style.backgroundColor = dark_theme
        current_theme = 0
    }
}
