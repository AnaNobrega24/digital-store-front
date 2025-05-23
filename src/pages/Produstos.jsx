import { useState } from "react";
import Produto from "../components/Produto";

const Produtos = () => {
    const [filtroMarca, setFiltroMarca] = useState([]);
    const [filtroCategoria, setCategoria] = useState([]);
    const [filtroGenero, setGenero] = useState([]);
    const [filtroEstado, setEstado] = useState("novo");

    function verificarMarca(marca) {
        if (filtroMarca.includes(marca)) {
            setFiltroMarca([...filtroMarca.filter(cadaMarca => cadaMarca != marca)]);
        } else {
            setFiltroMarca([...filtroMarca, marca]);
        }
    }
    console.log(filtroMarca);

    function verificarCategoria(categoria) {
        if (filtroCategoria.includes(categoria)) {
            setCategoria([...filtroCategoria.filter(cadaCategoria => cadaCategoria != categoria)]);
        } else {
            setCategoria([...filtroCategoria, categoria]);
        }
    }
    console.log(filtroCategoria);

    function verificarGenero(genero) {
        if (filtroGenero.includes(genero)) {
            setGenero([filtroGenero.filter(cadaGenero => cadaGenero !== genero)]);
        } else {
            setGenero([...filtroGenero, genero]);
        }
    }
    console.log(filtroGenero);

    function verificarEstado(estado) {
        setEstado(estado);
    }
    console.log(filtroEstado);

    return (
        <div className="xl:px-[100px] xl:pt-[40px] xl:pb-[140px]">
            {/* ordenação */}
            <div className="flex justify-between items-center">
                <h6><strong>Resultados para "Tênis"</strong> - 389 produtos</h6>
                <div className="leading-[60px] flex items-center px-4 border border-grafite rounded">
                    <strong>Ordenar por:</strong>
                    <select>
                        <option>mais relevantes</option>
                    </select>
                </div>
            </div>
            {/* Div de filtros e produtos */}
            <div className="flex gap-[28px] items-start mt-[40px]">
                {/* Div de filtro */}
                <div className="w-[300px] bg-white rounded p-[30px]">
                    <h5 className="font-bold text-grafite">Filtrar por</h5>
                    <div className="h-[1px] bg-cinza-claro my-[20px]"></div>
                    <h6 className="mb-[10px] font-bold text-grafite">Marca</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("adidas")}
                            />
                            Adidas
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("balenciaga")}
                            />
                            Balenciaga
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("nike")}
                            />
                            Nike
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarMarca("puma")}
                            />
                            Puma
                        </label>
                    </div>

                    <h6 className="mb-[10px] font-bold text-grafite  mt-4">Categoria</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("esporte e lazer")}
                            />
                            Esporte e Lazer
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("casual")}
                            />
                            Casual
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("utilitario")}
                            />
                            Utilitario
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("corrida")}
                            />
                            Corrida
                        </label>
                    </div>

                    <h6 className="mb-[10px] font-bold text-grafite  mt-4">Gênero</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("masculino")}
                            />
                            Masculino
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("feminino")}
                            />
                            feminino
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="checkbox"
                                onChange={() => verificarCategoria("unisex")}
                            />
                            Unisex
                        </label>
                    </div>

                    <h6 className="mb-[10px] font-bold text-grafite mt-4">Estado</h6>
                    <div className="grid gap-[10px]">
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="radio"
                                value="novo"
                                checked={filtroEstado === "novo"}
                                onChange={() => verificarEstado("novo")}
                            />
                            Novo
                        </label>
                        <label className="flex gap-[10px] items-center">
                            <input
                                className="w-[22px] h-[22px] accent-rosa"
                                type="radio"
                                value="usado"
                                checked={filtroEstado === "usado"}
                                onChange={() => verificarEstado("usado")}
                            />
                            Usado
                        </label>
                    </div>

                </div>

                {/* Div de produtos */}
                <div className="grid grid-cols-3 gap[14px]">
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                </div>

            </div>
        </div>
    );
}

export default Produtos;