import categorydata from '../../data/Category.json';
interface Category {
    id: number;
    name: string;
    description: string;
    totalgame : number;
}
const CategoryList=()=>{
    return(
        <>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h2 style={{ color: '#2c3e50' }}>Danh Mục Trò Chơi</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                    {/*
          4. Sử dụng hàm .map() kết hợp với Arrow Function
          để duyệt qua mảng categoriesData và hiển thị từng danh mục.
        */}
                    {categorydata.map((category: Category) => (
                        <div
                            key={category.id} // Bắt buộc phải có key (dùng id) để React quản lý danh sách
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '15px',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            <h3 style={{ margin: '0 0 10px 0', color: '#e67e22' }}>
                                {category.name}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#7f8c8d', height: '40px' }}>
                                {category.description}
                            </p>
                            <hr />
                            <p style={{ fontWeight: 'bold', margin: '10px 0 0 0' }}>
                                Số lượng game: {category.totalgame}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default CategoryList;