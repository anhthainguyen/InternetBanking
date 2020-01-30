CREATE DATABASE  IF NOT EXISTS `internetbanking` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `internetbanking`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: internetbanking
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `idKhachHang` int(11) NOT NULL,
  `HoVaTen` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `SDT` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`idKhachHang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoinhan`
--

DROP TABLE IF EXISTS `nguoinhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoinhan` (
  `idNguoiNhan` int(11) NOT NULL,
  `SoTaiKhoan` varchar(45) NOT NULL,
  `TenGoiNho` varchar(45) NOT NULL,
  PRIMARY KEY (`idNguoiNhan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoinhan`
--

LOCK TABLES `nguoinhan` WRITE;
/*!40000 ALTER TABLE `nguoinhan` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguoinhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacno`
--

DROP TABLE IF EXISTS `nhacno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacno` (
  `idNhacNo` int(11) NOT NULL AUTO_INCREMENT,
  `SoTKChuNo` varchar(45) NOT NULL,
  `SoTien` double NOT NULL,
  `SoTKNguoiNo` varchar(45) NOT NULL,
  `NoiDungNo` varchar(100) DEFAULT NULL,
  `DaThanhToan` bit(2) DEFAULT NULL,
  `NDXoaNo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idNhacNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhacno`
--

LOCK TABLES `nhacno` WRITE;
/*!40000 ALTER TABLE `nhacno` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhacno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `idNhanVien` int(11) NOT NULL,
  `HoVaTen` varchar(45) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `SDT` varchar(14) DEFAULT NULL,
  `DiaChi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idNhanVien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `idkhachhang` int(11) NOT NULL,
  `SoTaiKhoan` varchar(45) NOT NULL,
  `SoTien` double NOT NULL,
  PRIMARY KEY (`idkhachhang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoantietkiem`
--

DROP TABLE IF EXISTS `taikhoantietkiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoantietkiem` (
  `idTKTietKiem` int(11) NOT NULL,
  `idKhachHang` int(11) NOT NULL,
  `TenTaiKhoan` varchar(45) NOT NULL,
  `SoTien` double NOT NULL,
  `LaiXuat` float NOT NULL,
  `ThoiGianBD` date NOT NULL,
  `ThoiGianKT` date NOT NULL,
  PRIMARY KEY (`idTKTietKiem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoantietkiem`
--

LOCK TABLES `taikhoantietkiem` WRITE;
/*!40000 ALTER TABLE `taikhoantietkiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `taikhoantietkiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tkdangnhap`
--

DROP TABLE IF EXISTS `tkdangnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tkdangnhap` (
  `idTKDangNhap` int(11) NOT NULL,
  `MatKhau` int(11) NOT NULL,
  PRIMARY KEY (`idTKDangNhap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tkdangnhap`
--

LOCK TABLES `tkdangnhap` WRITE;
/*!40000 ALTER TABLE `tkdangnhap` DISABLE KEYS */;
/*!40000 ALTER TABLE `tkdangnhap` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-07 11:45:59
