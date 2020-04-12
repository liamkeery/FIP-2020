-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 12, 2020 at 10:38 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fip`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_faq`
--

CREATE TABLE `tbl_faq` (
  `id` int(11) NOT NULL,
  `question` varchar(250) NOT NULL,
  `response` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_faq`
--

INSERT INTO `tbl_faq` (`id`, `question`, `response`) VALUES
(1, 'How soon do you get the test results back?', 'It depends what you are being tested for. A typical STI test can get you results back in 2-3 days, depending on the clinic. An HIV test can be a longer wait as it can take about 3-12 weeks after exposure to get an accurate reading. After this time frame, a rapid HIV test can be administered which takes about 20 minutes.'),
(2, 'How do you know if you have HIV/AIDS?', 'Sometimes, about 2 weeks after being infected you may experience flu-like symptoms. However, this is not always the case. It is very common to not experience any symptoms at all. The only way to be sure is if after having unprotected sex or sharing needles, you get tested by a doctor.'),
(3, 'My friend has unprotected sex a lot, what do I do?', 'Your friend may not have anyone to guide them on safe sex practices, or maybe they are unware of the dangers unprotected sex can bring. For their safety, you can open up a conversation, letting them know you care for their health and happiness and want to make sure they’re being safe. If you or your friend want to learn more, check out our page on Safe Sex Practices.'),
(7, 'Hey Admin!', 'This FAQ was added using the custom CMS for this site. Check it out at /admin!');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`) VALUES
(1, 'Admin', 'admin', 'admin', 'admin@openup.org', '2020-03-16 14:37:55', '::1'),
(2, 'Admin', 'admin_2', 'admin', 'admin@openup.org', '2020-03-16 18:58:05', 'no'),
(3, 'Admin', 'admin_3', 'admin', 'admin@openup.org', '2020-03-16 23:02:10', 'no');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_faq`
--
ALTER TABLE `tbl_faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_faq`
--
ALTER TABLE `tbl_faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
