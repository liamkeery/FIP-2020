import home from "./home.js";


export default {
    template: `
    
    <!-- Sidebar Nav ADMIN ONLY-->
    <section>
   
    <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Admin Tools</h3>
        <hr class="mt-3 mr-3">
        </div>

        <ul class="list-unstyled components ml-2">
            <li class="active">
            <a href="#"><span><i class="fas fa-link mod mr-3"></i></span>Modify Navigation</a>
            </li>
            <li>
                <a href="#"><i class="fas fa-edit mt-0 mr-3"></i>Edit Content</a>
            </li>
            <li>
                <a href="#"><i class="fas fa-users-cog mt-0 mr-3"></i>Manage Users</a>
            </li>
            <li>
                <a href="#"><i class="fas fa-wrench mt-0 mr-3"></i>Edit Site Title</a>
            </li>
        </ul>
        <a class="btn-info" id="sidebarCollapse">
            <i class="fa fa-chevron-left" id="side-toggle"></i>
        </a>
        <button name="submit" class="btn">Logout<i class="fas fa-sign-out-alt mt-0 ml-2"></i></button>

    </nav>
    </div>

    <!-- Main content -->
    <div id="content">
        <home></home>
    </div>

    </section>
    `,
    components: {
        home: home
    }
}