USE [local-dev];
IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES
	  WHERE [TABLE_NAME] = 'users')
BEGIN

		CREATE TABLE users (
		 [user_id] INT identity(1,1) NOT NULL
		,[user_name] VARCHAR(255) NOT NULL
		,[add_date] DATETIME2 DEFAULT SYSDATETIME()
		,[is_deleted] BIT NULL
		,[date_deleted] DATETIME2 NULL
		,CONSTRAINT PK_users PRIMARY KEY ([user_id])
		);

		SELECT GETDATE() AS RESULT_Time,CONCAT ('TABLE ',T.TABLE_NAME,' created successfully') AS RESULT
		FROM INFORMATION_SCHEMA.TABLES T
		WHERE [TABLE_NAME] = 'users';

END

SELECT * FROM dbo.users


