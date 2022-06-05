import React, {Component} from 'react';

class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedIndex: -1
        }
    }

    render() {

        // ***************************************************************************************************
        const arrayMethods = () => {
            let numbers = [12, 34, 45, 66, -900, -56, -45, 34, 45454, 5656, 78, 2, 1];

            // for() - sikl
            for (let i = 0; i < numbers.length; i++){
                console.log(numbers[i]);
            }

            // forEach() - item, index, array qaytaradi har biriga amal qo'llash mumkin
            numbers.forEach((item, index, array) => {
                console.log(item, index, array);
            });

            // filter() - arrayni filterlash uchun ishatiladi
            const filteredNumbers = numbers.filter((item) => {
                return 0 < item;
            })
            console.log(filteredNumbers);

            // sort() - arrayni sortirovka qilib beradi
            const sortedNumbers = numbers.sort((item1, item2) => {
                return item1 - item2;
            });
            console.log(sortedNumbers);

            // map() - arrayni qayta chizib beradi
            const mappedNumbers = numbers.map((item) => {
                return 1;
            });
            console.log(mappedNumbers);

            // push(...array) - bitta arrayni ichiga ikkinchi arrayni ichidagi qiymatlirin oxiridan qo'shib qo'yish
            let numbers1 = [100, 200, 300], numbers2 = [1000, 9999, 8888];
            numbers1.push(...numbers2);
            // ... spread operator
            console.log(numbers1);
        }
        arrayMethods();

        // ******************************************************************************************************

        const addProduct = (event) => {
            // preventDefault() sahifani yangilanib ketishini oldini oladi
            event.preventDefault();
            let productName = event.target.productName.value;
            let productSurname = event.target.productSurname.value;
            let productDate = event.target.productDate.value;
            let productSelect = event.target.productSelect.value;
            // reset() - inputlarni ichini tozalab beradi
            event.target.reset();
            let newProduct = {
                name: productName,
                surname: productSurname,
                date: productDate,
                select: productSelect
            }

            if (this.state.selectedIndex >= 0){
                this.state.products[this.state.selectedIndex] = newProduct;
                this.state.selectedIndex = -1;
            } else {
                this.state.products.push(newProduct);
            }

            this.setState({
                products: this.state.products
            })
        }

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({
                products: this.state.products
            })
        }

        const editProduct = (index) => {
            this.setState({
                selectedIndex: index
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={addProduct}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        name="productName"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.name}
                                    />

                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Surname"
                                        name="productSurname"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.surname}
                                    />

                                    <input
                                        type="date"
                                        className="form-control mt-3"
                                        name="productDate"
                                        defaultValue={this.state.products[this.state.selectedIndex]?.date}
                                    />

                                    <select name="productSelect" className="form-control mt-3" defaultValue={this.state.products[this.state.selectedIndex]?.select}>
                                        <option>GRANT</option>
                                        <option>Kontrakt</option>
                                    </select>

                                    <button type="submit" className="btn btn-success ml-auto mt-3 d-block">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-9 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Ism Familiya</th>
                                        <th>Tug'ilgan sana</th>
                                        <th>O'qish turi</th>
                                        <th>amal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.products.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{ index }</td>
                                                <td>{ item.name + " " + item.surname }</td>
                                                <td>{ item.date }</td>
                                                <td>{ item.select }</td>
                                                <td className="d-flex justify-content-between align-items-center">
                                                    <button className="btn btn-primary" onClick={ () => editProduct(index)}>Edit</button>
                                                    <button className="btn btn-danger" onClick={ () => deleteProduct(index)}>Delete</button>
                                                </td>

                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Crud;
// rcc - class component
// rsf - function component
// rsc - arrow function component