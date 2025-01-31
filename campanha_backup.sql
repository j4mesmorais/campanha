--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: GrupoLista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GrupoLista" (
    id integer NOT NULL,
    "id_listaTransmis" integer,
    descricao character varying(255),
    origemlista json,
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."GrupoLista" OWNER TO postgres;

--
-- Name: GrupoLista_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."GrupoLista_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."GrupoLista_id_seq" OWNER TO postgres;

--
-- Name: GrupoLista_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."GrupoLista_id_seq" OWNED BY public."GrupoLista".id;


--
-- Name: ItemListaTransmis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ItemListaTransmis" (
    id integer NOT NULL,
    "id_listaTransmis" integer,
    id_mensagens integer,
    enviado boolean,
    "dtHoraEnviado" timestamp with time zone,
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ItemListaTransmis" OWNER TO postgres;

--
-- Name: ItemListaTransmis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ItemListaTransmis_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ItemListaTransmis_id_seq" OWNER TO postgres;

--
-- Name: ItemListaTransmis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ItemListaTransmis_id_seq" OWNED BY public."ItemListaTransmis".id;


--
-- Name: ListaTransmis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ListaTransmis" (
    id integer NOT NULL,
    id_grupolista integer,
    cadastro json,
    celular character varying(255),
    nome character varying(255),
    enviado boolean,
    "dtEnviado" timestamp with time zone,
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ListaTransmis" OWNER TO postgres;

--
-- Name: ListaTransmis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ListaTransmis_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ListaTransmis_id_seq" OWNER TO postgres;

--
-- Name: ListaTransmis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ListaTransmis_id_seq" OWNED BY public."ListaTransmis".id;


--
-- Name: Mensagens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Mensagens" (
    id integer NOT NULL,
    mensagem json,
    ordem integer,
    "id_pecaPublicit" integer,
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "id_listaTransmis" integer
);


ALTER TABLE public."Mensagens" OWNER TO postgres;

--
-- Name: Mensagens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Mensagens_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Mensagens_id_seq" OWNER TO postgres;

--
-- Name: Mensagens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Mensagens_id_seq" OWNED BY public."Mensagens".id;


--
-- Name: NaoEnviar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."NaoEnviar" (
    id integer NOT NULL,
    cadastro json,
    celular character varying(255),
    motivo character varying(255),
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."NaoEnviar" OWNER TO postgres;

--
-- Name: NaoEnviar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."NaoEnviar_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."NaoEnviar_id_seq" OWNER TO postgres;

--
-- Name: NaoEnviar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."NaoEnviar_id_seq" OWNED BY public."NaoEnviar".id;


--
-- Name: PecaPublicits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PecaPublicits" (
    id integer NOT NULL,
    "nomeCriativo" character varying(255),
    "dataHora" timestamp with time zone,
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."PecaPublicits" OWNER TO postgres;

--
-- Name: PecaPublicits_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PecaPublicits_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PecaPublicits_id_seq" OWNER TO postgres;

--
-- Name: PecaPublicits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PecaPublicits_id_seq" OWNED BY public."PecaPublicits".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: naoEnviars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."naoEnviars" (
    id integer NOT NULL,
    cadastro json,
    celular character varying(255),
    motivo character varying(255),
    "codEmp" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."naoEnviars" OWNER TO postgres;

--
-- Name: naoEnviars_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."naoEnviars_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."naoEnviars_id_seq" OWNER TO postgres;

--
-- Name: naoEnviars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."naoEnviars_id_seq" OWNED BY public."naoEnviars".id;


--
-- Name: GrupoLista id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GrupoLista" ALTER COLUMN id SET DEFAULT nextval('public."GrupoLista_id_seq"'::regclass);


--
-- Name: ItemListaTransmis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListaTransmis" ALTER COLUMN id SET DEFAULT nextval('public."ItemListaTransmis_id_seq"'::regclass);


--
-- Name: ListaTransmis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ListaTransmis" ALTER COLUMN id SET DEFAULT nextval('public."ListaTransmis_id_seq"'::regclass);


--
-- Name: Mensagens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mensagens" ALTER COLUMN id SET DEFAULT nextval('public."Mensagens_id_seq"'::regclass);


--
-- Name: NaoEnviar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."NaoEnviar" ALTER COLUMN id SET DEFAULT nextval('public."NaoEnviar_id_seq"'::regclass);


--
-- Name: PecaPublicits id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PecaPublicits" ALTER COLUMN id SET DEFAULT nextval('public."PecaPublicits_id_seq"'::regclass);


--
-- Name: naoEnviars id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."naoEnviars" ALTER COLUMN id SET DEFAULT nextval('public."naoEnviars_id_seq"'::regclass);


--
-- Data for Name: GrupoLista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."GrupoLista" (id, "id_listaTransmis", descricao, origemlista, "codEmp", "createdAt", "updatedAt") FROM stdin;
1	\N	Grupo 1	\N	1	2024-12-01 15:59:02.49-03	2024-12-01 15:59:02.49-03
\.


--
-- Data for Name: ItemListaTransmis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ItemListaTransmis" (id, "id_listaTransmis", id_mensagens, enviado, "dtHoraEnviado", "codEmp", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: ListaTransmis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ListaTransmis" (id, id_grupolista, cadastro, celular, nome, enviado, "dtEnviado", "codEmp", "createdAt", "updatedAt") FROM stdin;
1	1	\N	\N	James	\N	\N	1	2024-12-01 15:59:02.535-03	2024-12-01 15:59:02.535-03
2	1	\N	\N	Henry	\N	\N	1	2024-12-01 15:59:02.535-03	2024-12-01 15:59:02.535-03
3	1	\N	\N	Lobo	\N	\N	1	2024-12-01 15:59:02.535-03	2024-12-01 15:59:02.535-03
4	1	\N	\N	Morais	\N	\N	1	2024-12-01 15:59:02.535-03	2024-12-01 15:59:02.535-03
\.


--
-- Data for Name: Mensagens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Mensagens" (id, mensagem, ordem, "id_pecaPublicit", "codEmp", "createdAt", "updatedAt", "id_listaTransmis") FROM stdin;
\.


--
-- Data for Name: NaoEnviar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."NaoEnviar" (id, cadastro, celular, motivo, "codEmp", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: PecaPublicits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PecaPublicits" (id, "nomeCriativo", "dataHora", "codEmp", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20241127175247-create-peca-publicit.js
20241127175251-create-mensagens.js
20241130042600-create-naoenviar.js
20241130042600-create-listatransmis.js
20241130042600-create-grupolista.js
20241130042600-create-itemlistatransmis.js
\.


--
-- Data for Name: naoEnviars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."naoEnviars" (id, cadastro, celular, motivo, "codEmp", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: GrupoLista_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."GrupoLista_id_seq"', 2, true);


--
-- Name: ItemListaTransmis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ItemListaTransmis_id_seq"', 1, false);


--
-- Name: ListaTransmis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ListaTransmis_id_seq"', 6, true);


--
-- Name: Mensagens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Mensagens_id_seq"', 1, false);


--
-- Name: NaoEnviar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."NaoEnviar_id_seq"', 1, false);


--
-- Name: PecaPublicits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PecaPublicits_id_seq"', 1, false);


--
-- Name: naoEnviars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."naoEnviars_id_seq"', 1, false);


--
-- Name: GrupoLista GrupoLista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GrupoLista"
    ADD CONSTRAINT "GrupoLista_pkey" PRIMARY KEY (id);


--
-- Name: ItemListaTransmis ItemListaTransmis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListaTransmis"
    ADD CONSTRAINT "ItemListaTransmis_pkey" PRIMARY KEY (id);


--
-- Name: ListaTransmis ListaTransmis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ListaTransmis"
    ADD CONSTRAINT "ListaTransmis_pkey" PRIMARY KEY (id);


--
-- Name: Mensagens Mensagens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mensagens"
    ADD CONSTRAINT "Mensagens_pkey" PRIMARY KEY (id);


--
-- Name: NaoEnviar NaoEnviar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."NaoEnviar"
    ADD CONSTRAINT "NaoEnviar_pkey" PRIMARY KEY (id);


--
-- Name: PecaPublicits PecaPublicits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PecaPublicits"
    ADD CONSTRAINT "PecaPublicits_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: naoEnviars naoEnviars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."naoEnviars"
    ADD CONSTRAINT "naoEnviars_pkey" PRIMARY KEY (id);


--
-- Name: ListaTransmis ListaTransmis_id_grupolista_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ListaTransmis"
    ADD CONSTRAINT "ListaTransmis_id_grupolista_fkey" FOREIGN KEY (id_grupolista) REFERENCES public."GrupoLista"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Mensagens Mensagens_id_listaTransmis_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mensagens"
    ADD CONSTRAINT "Mensagens_id_listaTransmis_fkey" FOREIGN KEY ("id_listaTransmis") REFERENCES public."GrupoLista"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Mensagens Mensagens_id_pecaPublicit_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mensagens"
    ADD CONSTRAINT "Mensagens_id_pecaPublicit_fkey" FOREIGN KEY ("id_pecaPublicit") REFERENCES public."PecaPublicits"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

