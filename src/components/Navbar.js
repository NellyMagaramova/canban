export default  function Navbar(){
    return <nav  className = "nav">
        <a href="/"  className="site-title " >Канбан</a>

        <ul>
            <li>
                <a href="/create_task"></a>
                <a href="/show_desk"></a>

            </li>
        </ul>

    </nav>

}