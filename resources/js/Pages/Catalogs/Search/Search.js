import Skeleton from "@/Components/Skeleton";
import TextInput from "@/Components/Input";
import AuthenticatedLayout from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import ResultList from "./ResultList";
import React from "react";

export default function Search({ auth, results }) {
    console.log(results);
    const {
        data,
        setData,
        processing,
        get,
        reset,
        errors,
        recentlySuccessful,
    } = useForm({
        sku: "",
    });

    const submit = (e) => {
        e.preventDefault();
        get(route("search"), {
            preserveScroll: true,
            onError: (err) => {
                console.log(err);
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="lg:flex lg:items-center lg:justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Busqueda
                    </h2>
                    <div className="mt-5 flex lg:mt-0 lg:ml-4">
                        <span className="sm:ml-3">
                            <form
                                className="inline-flex justify-between space-x-2"
                                onSubmit={submit}
                            >
                                <div className="relative z-0 w-full group">
                                    <TextInput
                                        id="sku"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.sku}
                                        handleChange={(e) =>
                                            setData("sku", e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <button
                                        data-modal-hide="popup-modal"
                                        type="submit"
                                        disabled={processing}
                                        className={`py-2.5 px-5 mt-1 mr-2 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-gray-200 hover:bg-indigo-100 hover:text-indigo-700 focus:z-10 focus:ring-2 focus:ring-indigo-700 focus:text-indigo-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center ${
                                            !processing ? "visible" : "hidden"
                                        }`}
                                    >
                                        Buscar
                                    </button>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            }
        >
            <Head title="Busqueda" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Skeleton items={8} show={processing} />
                    <ResultList show={!processing} items={results} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
