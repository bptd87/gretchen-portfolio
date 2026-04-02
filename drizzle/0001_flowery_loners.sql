CREATE TABLE `projectImages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int NOT NULL,
	`imageUrl` text NOT NULL,
	`imageType` enum('rendering','production','research','drafting') NOT NULL,
	`displayOrder` int NOT NULL DEFAULT 0,
	`caption` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `projectImages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`theatre` varchar(255) NOT NULL,
	`year` varchar(4) NOT NULL,
	`category` varchar(100) NOT NULL,
	`heroImage` text NOT NULL,
	`description` text NOT NULL,
	`designStatement` text NOT NULL,
	`directorName` varchar(255),
	`choreographerName` varchar(255),
	`musicDirectorName` varchar(255),
	`scenicDesignerName` varchar(255) NOT NULL,
	`costumeDesignerName` varchar(255),
	`lightingDesignerName` varchar(255),
	`soundDesignerName` varchar(255),
	`projectionDesignerName` varchar(255),
	`stageManagerName` varchar(255),
	`photographyName` varchar(255),
	`displayOrder` int NOT NULL DEFAULT 0,
	`published` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`),
	CONSTRAINT `projects_slug_unique` UNIQUE(`slug`)
);
