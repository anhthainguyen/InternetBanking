-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: internetbanking
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `giaodich`
--

DROP TABLE IF EXISTS `giaodich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaodich` (
  `idGiaoDich` int NOT NULL AUTO_INCREMENT,
  `SoTaiKhoanG` varchar(45) NOT NULL,
  `SoTaiKhoanN` varchar(45) NOT NULL,
  `NganHang` varchar(45) DEFAULT NULL,
  `SoTien` double NOT NULL,
  `NgayGio` datetime(1) NOT NULL,
  PRIMARY KEY (`idGiaoDich`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaodich`
--

LOCK TABLES `giaodich` WRITE;
/*!40000 ALTER TABLE `giaodich` DISABLE KEYS */;
INSERT INTO `giaodich` VALUES (1,'123456789','234567890',NULL,6000000,'2020-02-02 00:00:00.0'),(2,'345678901','456789012',NULL,8000000,'2020-02-25 23:09:01.0'),(3,'345678901','123456789',NULL,8000000,'2020-02-25 23:09:01.0');
/*!40000 ALTER TABLE `giaodich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `idKhachHang` int NOT NULL,
  `HoVaTen` varchar(45) NOT NULL,
  `SoTaiKhoan` varchar(45) NOT NULL,
  `SoTien` double NOT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `SDT` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`idKhachHang`),
  UNIQUE KEY `SoTaiKhoan_UNIQUE` (`SoTaiKhoan`)
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
  `idNguoiNhan` int NOT NULL AUTO_INCREMENT,
  `idKhachHang` int NOT NULL,
  `SoTaiKhoan` varchar(45) NOT NULL,
  `TenGoiNho` varchar(45) NOT NULL,
  PRIMARY KEY (`idNguoiNhan`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoinhan`
--

LOCK TABLES `nguoinhan` WRITE;
/*!40000 ALTER TABLE `nguoinhan` DISABLE KEYS */;
INSERT INTO `nguoinhan` VALUES (1,1,'123456789','Khai');
/*!40000 ALTER TABLE `nguoinhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacno`
--

DROP TABLE IF EXISTS `nhacno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacno` (
  `idNhacNo` int NOT NULL AUTO_INCREMENT,
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
  `idNhanVien` int NOT NULL,
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
-- Table structure for table `taikhoantietkiem`
--

DROP TABLE IF EXISTS `taikhoantietkiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoantietkiem` (
  `idTKTietKiem` int NOT NULL AUTO_INCREMENT,
  `idKhachHang` int NOT NULL,
  `TenTaiKhoan` varchar(45) NOT NULL,
  `SoTien` double NOT NULL,
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
  `idTKDangNhap` int NOT NULL,
  `TenDangNhap` varchar(45) NOT NULL,
  `MatKhau` varchar(100) NOT NULL,
  PRIMARY KEY (`idTKDangNhap`),
  UNIQUE KEY `TenDangNhap_UNIQUE` (`TenDangNhap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tkdangnhap`
--

LOCK TABLES `tkdangnhap` WRITE;
/*!40000 ALTER TABLE `tkdangnhap` DISABLE KEYS */;
INSERT INTO `tkdangnhap` VALUES (1,'Thai Quang Khai','$2a$08$b0wgz.XU0LFRFnYzBHK8hup/P4mZ/8F3FQxCgdxNlD6NvbIZfxVnG'),(2,'Thai Khai','$2a$08$12AWIQa8MxRWsXRWFo1tJ.AtwNUlQ05Z4iZtQCBPm8Qa1M06o7YcK'),(3,'Thai Khai3','$2a$08$nLAqtcb5Vi8ClCrlyyogvuIAyFa9oAxb9nRMxPxXv0f2HvfmwdQAC'),(4,'Thai Khai4','$2a$08$zcBQd2uYwFw1UVDtdxY2zOMMeDMhSUggOhnIqpEk9.LCOy2m8k3se');
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

-- Dump completed on 2020-02-25 23:40:43
