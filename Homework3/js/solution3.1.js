
function preferredMovie() {
    let arr_string = prompt("Введите названия фильмов через запятую для заполнения базы.\n" +
        "Название первого фильма будет использовано в качестве самого любимого.")
    let array = arr_string.split(",", 2);
    let preferred_movie = prompt("Угадайте самый любимый фильм (введите его название)");
        while (preferred_movie !== array[0])
            {
                window.alert("Попробуйте ещё раз");
                preferred_movie = prompt("Угадайте самый любимый фильм (введите его название)");
            }
        if (preferred_movie === array[0])
            {
                window.alert(`Всё верно! Любимый фильм ${preferred_movie}!`);
            }
    }