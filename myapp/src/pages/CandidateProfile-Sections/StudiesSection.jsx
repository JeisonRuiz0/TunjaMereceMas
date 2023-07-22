import React from "react";
import './styles/StudiesSection.scss';

const StudiesSection = () => {
    return (
        <div className="studies">
            <div className="studies-tittle_text">
                <h2></h2>
                <h1>Formacion Academica</h1>
            </div>

            <div className="studies-tittle_content">
                <div className="studies-feedContainer">
                    <ul
                        aria-label="Changelog feed"
                        role="feed"
                        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
                    >
                        <li
                            role="article"
                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-fuchsia-800 before:ring-2 before:ring-white"
                        >
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="contentManageData">
                                    <h4 className="text-lg font-medium text-sky-500">
                                        Abogado de la Universidad INNCA de Colombia{" "}
                                        <span className="text-lg font-normal text-slate-500">
                                            {" "}
                                            - 2023-02-08
                                        </span>{" "}
                                    </h4>
                                    <p className=" text-slate-500">
                                        This provides a very significant performance boost on pages with a
                                        huge number of DOM nodes, but there's a chance it could be a
                                        breaking change in very rare edge cases we haven't thought of.
                                        Update several dependencies, including postcss-js.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            role="article"
                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-fuchsia-800 before:ring-2 before:ring-white"
                        >
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="contentManageData">
                                    <h4 className="text-lg font-medium text-sky-500">
                                        Especialista en Instituciones Jurídico Políticas y Derecho Público de la Universidad Nacional de Colombia{" "}
                                        <span className="text-lg font-normal text-slate-500">
                                            {" "}
                                            - 2023-01-21
                                        </span>{" "}
                                    </h4>
                                    <p className="text-slate-500">
                                        Pass extended color palette to theme closures so it can be used
                                        without installing Tailwind when using npx tailwindcss.
                                    </p>
                                </div>


                            </div>
                        </li>
                        <li
                            role="article"
                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-fuchsia-800 before:ring-2 before:ring-white"
                        >
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="contentManageData">
                                    <h4 className="text-lg font-medium text-sky-500">
                                        Especialista en Gobierno y Gerencia Territorial de la Universidad Santo Tomás{" "}
                                        <span className="text-lg font-normal text-slate-500">
                                            {" "}
                                            - 2023-01-18
                                        </span>{" "}
                                    </h4>
                                    <p className="text-slate-500">
                                        Although this is a bugfix it could affect your site if you were
                                        working around the bug in your own code by not prefixing the group
                                        className.{" "}
                                    </p>
                                </div>


                            </div>
                        </li>

                        <li
                            role="article"
                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-fuchsia-800 before:ring-2 before:ring-white"
                        >
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="contentManageData">
                                    <h4 className="text-lg font-medium text-sky-500">
                                        Especialista en Gestión Pública de la Escuela Superior de Administración Pública -ESAP-{" "}
                                        <span className="text-lg font-normal text-slate-500">
                                            {" "}
                                            - 2023-01-18
                                        </span>{" "}
                                    </h4>
                                    <p className="text-slate-500">
                                        Although this is a bugfix it could affect your site if you were
                                        working around the bug in your own code by not prefixing the group
                                        className.{" "}
                                    </p>
                                </div>


                            </div>
                        </li>
                        <li
                            role="article"
                            className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-fuchsia-800 before:ring-2 before:ring-white"
                        >
                            <div className="flex flex-col flex-1 gap-4">
                                <div className="contentManageData">
                                    <h4 className="text-lg font-medium text-sky-500">
                                        Magister en Derecho de Estado, Gobierno y Desarrollo de Entidades territoriales de la Universidad Externado de Colombia.
                                        {" "}
                                        <span className="text-lg font-normal text-slate-500">
                                            {" "}
                                            - 2023-01-18
                                        </span>{" "}
                                    </h4>
                                    <p className="text-slate-500">
                                        Although this is a bugfix it could affect your site if you were
                                        working around the bug in your own code by not prefixing the group
                                        className.{" "}
                                    </p>
                                </div>


                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StudiesSection;