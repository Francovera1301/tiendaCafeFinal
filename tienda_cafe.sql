-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2025 a las 02:27:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda_cafe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`) VALUES
(8, 'cafesito', 99999999.99, '/uploads/1762517681077-Productos_cafe_packs_BRASIL_frente-768x768.jpg'),
(11, 'cafe', 5786.00, '/uploads/1762557954239-Productos_cafe_packs_SCEGLIERE_frente.jpg'),
(12, 'afe', 1243.00, '/uploads/1762560902113-Productos_cafe_packs_COLOMBIA_frente.jpg'),
(13, 'tere', 123455.00, '/uploads/1762560911193-Productos_cafe_packs_BARISTA_frente-768x768.jpg'),
(14, 'late', 8689.00, '/uploads/1762560921104-Productos_cafe_packs_MINKA_frente.jpg'),
(15, '56', 568.00, '/uploads/1762560932445-Productos_cafe_packs_descaf_frente.jpg'),
(16, 'fra', 66556.00, '/uploads/1762565066848-Productos_cafe_packs_COLOMBIA_frente.jpg'),
(17, 'sdfg', 12453.00, '/uploads/1762565074778-capsulas_taza_minka-600x600.jpg'),
(18, '5756', 457657.00, '/uploads/1762565121263-Productos_cafe_packs_BARISTA_frente-768x768.jpg'),
(19, '768679', 54778.00, '/uploads/1762565131730-Productos_cafe_packs_BRASIL_frente-768x768.jpg'),
(20, '356876548', 875987.00, '/uploads/1762565142686-Productos_cafe_packs_descaf_frente.jpg'),
(21, '2345325', 4536456.00, '/uploads/1762558896967-Productos_cafe_packs_SCEGLIERE_frente.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripciones`
--

CREATE TABLE `suscripciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `suscripciones`
--

INSERT INTO `suscripciones` (`id`, `nombre`, `email`) VALUES
(1, 'cafesito', 'd@gma.com'),
(2, 'franco', 'frnaco.vera420@gmail.com'),
(3, 'Franco lisandro Vera', 'frnaco.vera420@gmail.com'),
(4, 'fra', 'frnaco.vera420@gmail.com'),
(5, 'Franco Lisandro', 'frnaco.vera420@gmail.com'),
(6, 'DA', 'frnacAAAAA@gmail.com'),
(7, 'AAAAA', 'AAAA@AAAA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` enum('admin','user') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `rol`) VALUES
(2, 'admin', 'admin@cafe.com', 'admin1234', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
