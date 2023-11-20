export default  function Navbar(){
    return <nav  className = "nav">
        <a href="/"  className="site-title " >Канбан</a>

        <ul>
            <li> <a href="/create_task"></a>Создать задачу </li>
            <li> <a href="/show_desk"></a> Доска задач</li>
            <li> <a href="/show_all_tasks"></a>Список задач </li>
        </ul>

    </nav>

}