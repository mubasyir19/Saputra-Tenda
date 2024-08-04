"use client";

import CardProduct from "@/components/CardProduct";
import Header from "@/components/Header";
import {
  BackgroundDinding,
  CoverMeja,
  DekorasiLengkap,
  KainPelamin,
  Plafon,
  RumbaiTenda,
  SarungKursi,
} from "@/services/dataProduct/serve";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Products() {
  const [productTab, setProductTab] = useState("AllProducts");

  function loopData(product, callback) {
    return product.map(callback);
  }

  const switchTab = (tabName) => {
    setProductTab(tabName);
  };

  return (
    <>
      <Header title="Our Products" />
      <section
        className="mx-auto my-10 block gap-x-8 px-5 md:flex  md:justify-center"
        style={poppins.style}
      >
        <div className="h-fit w-full flex-col overflow-hidden rounded-xl bg-white px-2 py-4 text-sm drop-shadow-lg md:w-48 md:text-xs lg:w-56 lg:text-sm xl:w-64">
          <button
            onClick={() => switchTab("AllProducts")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "AllProducts"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Semua Produk
          </button>
          <button
            onClick={() => switchTab("SarungKursi")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "SarungKursi"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Sarung Kursi
          </button>
          <button
            onClick={() => switchTab("RumbaiTenda")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "RumbaiTenda"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Rumbai / Poni Tenda
          </button>
          <button
            onClick={() => switchTab("Plafon")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "Plafon"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Plafon Dekorasi Tenda
          </button>
          <button
            onClick={() => switchTab("CoverMeja")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "CoverMeja"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Cover Meja
          </button>
          <button
            onClick={() => switchTab("KainPelamin")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "KainPelamin"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Kain Pelamin
          </button>
          <button
            onClick={() => switchTab("BackgroundDinding")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "BackgroundDinding"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Background Dinding
          </button>
          <button
            onClick={() => switchTab("DekorasiLengkap")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "DekorasiLengkap"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Dekorasi Tenda Lengkap
          </button>
          <button
            onClick={() => switchTab("TerpalTenda")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "TerpalTenda"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Terpal Tenda
          </button>
          <button
            onClick={() => switchTab("KainLotto")}
            className={`w-full rounded-md px-4 py-2 text-start ${
              productTab === "KainLotto"
                ? "bg-black bg-opacity-10 transition-all"
                : "hover:bg-black hover:bg-opacity-10 hover:transition-all"
            }`}
          >
            Kain Lotto
          </button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {productTab === "AllProducts" && (
            <>
              {loopData(SarungKursi, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
              {loopData(RumbaiTenda, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
              {loopData(Plafon, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
              {loopData(CoverMeja, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "SarungKursi" && (
            <>
              {loopData(SarungKursi, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "RumbaiTenda" && (
            <>
              {loopData(RumbaiTenda, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "Plafon" && (
            <>
              {loopData(Plafon, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "CoverMeja" && (
            <>
              {loopData(CoverMeja, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "KainPelamin" && (
            <>
              {loopData(KainPelamin, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "BackgroundDinding" && (
            <>
              {loopData(BackgroundDinding, (item, key) => (
                <CardProduct
                  productImage={"photography"}
                  key={key}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "DekorasiLengkap" && (
            <>
              {loopData(DekorasiLengkap, (item, key) => (
                <CardProduct
                  productImage={"photography"}
                  key={key}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "TerpalTenda" && (
            <>
              {loopData(TerpalTenda, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
          {productTab === "KainLotto" && (
            <>
              {loopData(KainLotto, (item, key) => (
                <CardProduct
                  key={key}
                  productImage={"photography"}
                  productName={item.name}
                  productPrice={item.price}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}
