-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2022 at 06:02 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rhemarx`
--

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(50) NOT NULL,
  `access_id` varchar(50) NOT NULL,
  `access_key` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sex` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `facial_marks` varchar(50) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `skin_color` varchar(50) NOT NULL,
  `height` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `access_id`, `access_key`, `name`, `sex`, `age`, `address`, `facial_marks`, `nationality`, `skin_color`, `height`) VALUES
(1, 'cdfdfd', 'fdfdasf', 'sdfdsfd', 'fdfdaf', 'dfdasfd', 'fdfd', 'fdfdf', 'fdfdf', 'dfdfd', 'dfdfd'),
(2, 'fbvf', 'sdsdsddsd', 'dsdsd', 'fgfdgd', 'fdfds', 'fdfd', 'dfff', 'dffffdfdf', 'dfdfdf', 'sddsddd'),
(6, 'fgfgfg', 'fbvffgfg', 'fgfdgf', 'sdsdsddsdfg', 'fgfg', 'fdfd', 'fgfgfg', 'dffffdfdf', 'gfgfgfg', 'sddsddd'),
(11, 'wdwd', '', 'dwdwd', '', 'wdfd', '', 'wdwdw', '', 'wdwdw', ''),
(13, 'gfgfg', 'gfgf', 'fgfg', 'gfgf', 'fgf', 'gfgf', 'gfgfg', 'gfgf', 'fgfgfg', 'gfg'),
(14, 'bvb', 'vbv', 'vbb', 'bvb', 'bv', 'vbvb', 'fgbgf', 'vbvb', 'fgbfgb', 'vb'),
(16, 'gdfgdv', 'vcv', 'vcxv', 'cvcv', 'cvcv', 'cv', 'cvcx', 'vvv', 'vcvcxv', 'vcv'),
(17, 'jghfgh', 'ghgh', 'gfhgfhgh', 'ghghgh', 'ghgh', 'hghg', 'ghgh', 'hghg', 'gjhghgh', 'hghg'),
(18, 'mmmm.', '.m.m.', 'm,.m,', 'm.m.m', 'n,n,', '.m.', 'n,n,mn,', 'mmm', 'n,n,mn,', '.mmmm'),
(19, 'tip', 'tip', 'vhbghgh', 'hghgh', 'hghg', 'ghgh', 'hghg', 'ghg', 'hghghg', 'ghghgh'),
(20, '', '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `access_id` (`access_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
