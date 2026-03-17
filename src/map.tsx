const Map =()=>{
    const users = [
        { id: 1, firstName: "An", lastName: "Nguyễn Văn" },
        { id: 2, firstName: "Bình", lastName: "Trần Thị" },
        { id: 3, firstName: "Chi", lastName: "Lê Văn" }
    ];




    return(
        <>
            <div className={""}>
                {users.map((user)=>(
                    <div key={user.id}>{user.id},{user.firstName},{user.lastName} + Full name : {user.lastName} {user.firstName}</div>
                ))}
            </div>
        </>
    );
}
export default Map;