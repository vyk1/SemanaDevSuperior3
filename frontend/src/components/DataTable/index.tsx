import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        last: true,
        first: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then((res => {
                setPage(res.data)
            }))
    }, [activePage]);

    const changePage = (idx: number) => {
        setActivePage(idx)
    }
    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            page.content?.map(c => (
                                <tr key={c.id}>
                                    <td>{formatLocalDate(c.date, 'dd/MM/yyyy')}</td>
                                    <td>{c.seller.name}</td>
                                    <td>{c.visited}</td>
                                    <td>{c.deals}</td>
                                    <td>{c.amount}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;
