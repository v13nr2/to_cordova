-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.38-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table apilara.articles
DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table apilara.articles: ~3 rows (approximately)
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` (`id`, `title`, `content`, `created_at`, `updated_at`) VALUES
	(1, 'Flutter dan masa depan', 'Masa depan Flutter bagaimana ?', '2020-06-08 11:44:05', '2020-06-08 11:44:05'),
	(2, 'Laravel tetap Pilihan', 'Kok Berujung ke PHP lagi, tapi mending udah bersama laravel', '2020-06-08 11:44:33', '2020-06-08 11:44:33'),
	(4, 'Bagaimana dengan Bahasa Native', 'Native PHP atau JAVA atau Javascript', '2020-06-08 12:02:41', '2020-06-08 12:02:41');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;

-- Dumping structure for table apilara.bmb_binary_table
DROP TABLE IF EXISTS `bmb_binary_table`;
CREATE TABLE IF NOT EXISTS `bmb_binary_table` (
  `binary_id` int(11) DEFAULT NULL,
  `binary_member_id` int(11) DEFAULT NULL,
  `jumlah_downline_kiri` int(11) DEFAULT NULL,
  `jumlah_downline_kanan` int(11) DEFAULT NULL,
  `jumlah_downline_upgrade_kiri` int(11) DEFAULT NULL,
  `jumlah_downline_upgrade_kanan` int(11) DEFAULT NULL,
  `jumlah_pv_kiri` int(11) DEFAULT NULL,
  `jumlah_pv_kanan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.bmb_binary_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `bmb_binary_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `bmb_binary_table` ENABLE KEYS */;

-- Dumping structure for table apilara.migrations
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table apilara.migrations: ~0 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_group
DROP TABLE IF EXISTS `nng_group`;
CREATE TABLE IF NOT EXISTS `nng_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_group: ~1 rows (approximately)
/*!40000 ALTER TABLE `nng_group` DISABLE KEYS */;
INSERT INTO `nng_group` (`id`, `name`, `desc`) VALUES
	(1, 'Admin', 'Super Admin');
/*!40000 ALTER TABLE `nng_group` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_jenis_bonus
DROP TABLE IF EXISTS `nng_jenis_bonus`;
CREATE TABLE IF NOT EXISTS `nng_jenis_bonus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_jenis_bonus` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_jenis_bonus: ~4 rows (approximately)
/*!40000 ALTER TABLE `nng_jenis_bonus` DISABLE KEYS */;
INSERT INTO `nng_jenis_bonus` (`id`, `nama_jenis_bonus`) VALUES
	(1, 'BONUS SPONSOR'),
	(2, 'BONUS PASANGAN'),
	(3, 'BONUS TITIK'),
	(4, 'REWARDS');
/*!40000 ALTER TABLE `nng_jenis_bonus` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_menu
DROP TABLE IF EXISTS `nng_menu`;
CREATE TABLE IF NOT EXISTS `nng_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_menu` varchar(150) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `linkz` varchar(150) NOT NULL,
  `aktif` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_menu: ~24 rows (approximately)
/*!40000 ALTER TABLE `nng_menu` DISABLE KEYS */;
INSERT INTO `nng_menu` (`id`, `nama_menu`, `parent_id`, `linkz`, `aktif`) VALUES
	(1, 'HOME', 0, '', 'Y'),
	(2, 'CONTENT MANAGER', 0, '', 'Y'),
	(3, 'MEMBER MANAGER', 0, '', 'Y'),
	(4, 'CARD CENTRE', 0, '', 'Y'),
	(5, 'AUTOMAINTAINCE', 0, '', 'Y'),
	(6, 'REWARD', 0, '', 'Y'),
	(7, 'PROFIT SHARE', 0, '', 'Y'),
	(8, 'STOCKIST MANAGER', 0, '', 'Y'),
	(9, 'ORDER PIN', 0, '', 'Y'),
	(10, 'CONFIGURATION', 0, '', 'Y'),
	(11, 'SALDO ADMIN', 0, '', 'Y'),
	(12, 'LAPORAN', 0, '', 'Y'),
	(13, 'TOOLS', 0, '', 'Y'),
	(14, 'All Member', 3, 'user_list', 'Y'),
	(15, 'Active Member', 3, '', 'Y'),
	(16, 'Pending Member', 3, '', 'Y'),
	(17, 'Bayar Harian', 3, '', 'Y'),
	(18, 'Lihat Witdrawal', 3, '', 'Y'),
	(19, 'Article Manager', 2, '', 'Y'),
	(20, 'Category Manager', 2, '', 'Y'),
	(21, 'Input Berita', 2, '', 'Y'),
	(22, 'Input Iklan', 2, '', 'Y'),
	(23, 'Bonus Category', 10, 'bonus_cat', 'Y'),
	(24, 'Dashboard', 1, 'home', 'Y');
/*!40000 ALTER TABLE `nng_menu` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_permission
DROP TABLE IF EXISTS `nng_permission`;
CREATE TABLE IF NOT EXISTS `nng_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fungsi` varchar(150) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_permission: ~1 rows (approximately)
/*!40000 ALTER TABLE `nng_permission` DISABLE KEYS */;
INSERT INTO `nng_permission` (`id`, `fungsi`) VALUES
	(1, 'user_list');
/*!40000 ALTER TABLE `nng_permission` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_perm_to_group
DROP TABLE IF EXISTS `nng_perm_to_group`;
CREATE TABLE IF NOT EXISTS `nng_perm_to_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_perm_to_group: ~0 rows (approximately)
/*!40000 ALTER TABLE `nng_perm_to_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `nng_perm_to_group` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_users_to_group
DROP TABLE IF EXISTS `nng_users_to_group`;
CREATE TABLE IF NOT EXISTS `nng_users_to_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_users_to_group: ~1 rows (approximately)
/*!40000 ALTER TABLE `nng_users_to_group` DISABLE KEYS */;
INSERT INTO `nng_users_to_group` (`id`, `user_id`, `group_id`) VALUES
	(1, 1, 1);
/*!40000 ALTER TABLE `nng_users_to_group` ENABLE KEYS */;

-- Dumping structure for table apilara.nng_user_detail
DROP TABLE IF EXISTS `nng_user_detail`;
CREATE TABLE IF NOT EXISTS `nng_user_detail` (
  `member_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) NOT NULL,
  `auth_user_id` int(11) NOT NULL DEFAULT '0',
  `nama_lengkap` varchar(150) NOT NULL,
  `upline_id` varchar(150) NOT NULL,
  `sponsor_id` varchar(150) DEFAULT NULL,
  `kota` varchar(150) DEFAULT NULL,
  `id_downline_kiri` varchar(150) DEFAULT NULL,
  `id_downline_kanan` varchar(150) DEFAULT NULL,
  `posisi` varchar(150) DEFAULT NULL,
  `jumlah_pv` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`member_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table apilara.nng_user_detail: ~0 rows (approximately)
/*!40000 ALTER TABLE `nng_user_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `nng_user_detail` ENABLE KEYS */;

-- Dumping structure for table apilara.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuidx` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `email` (`email`(191)),
  KEY `uuidx` (`uuidx`(191))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table apilara.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `uuidx`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, '6f43adf8-7d65-4f8c-8d09-5cb714327139', 'Nanang Pro', 'nanang.manajer@gmail.com', NULL, '$2y$10$SkXqAqETCces8o/whl.kkuYlNe/r1RtZ2ne99GME5DwAyOniObnc2', NULL, '2020-06-23 10:56:41', '2020-06-23 10:56:41'),
	(2, '9b7ef94f-774b-4afa-bc01-556933b580ad', 'Nanang NIIT MKS', 'nanang.programmer@gmail.com', NULL, '$2y$10$x27u8Cv2XbLmRIQAa.sLy.RBeguNpS703dXqk/t4RSGzpBq9WZh4K', NULL, '2020-06-23 10:57:01', '2020-06-23 10:57:01'),
	(3, '896ab1de-e4a7-40de-8437-87c9064dda64', 'Nanang NIIT MKS 1', 'nanang.programmer1@gmail.com', NULL, '$2y$10$dlcrIGn1qZAagUgX4tvWceiDuFyVwn5uk.PqHOBEml1cuzxFH8Kda', NULL, '2020-06-23 12:28:16', '2020-06-23 12:28:16'),
	(4, 'e5fe1c4e-25bc-48f6-8770-47e71382f511', 'Atikah Nasyla Putri', 'atikah@atikah.com', NULL, '$2y$10$SWFSNpEDvyHrmbG3Nzfsbeg1A0H6t6nBWqqA7G.wu9ePVlC98NIi.', NULL, '2020-06-23 12:33:35', '2020-06-23 12:33:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
