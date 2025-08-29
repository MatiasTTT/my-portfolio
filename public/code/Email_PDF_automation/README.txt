This email workflow automation was developed in tandem with Anthropic Claude Opus 4.1
to massively shorten the time spent on manually handling emails containing specific types of PDFs
required for day-to-day business operations. The script connects to Outlook,
identifies relevant incoming messages based on defined patterns, follows the contained portal links,
and automatically downloads and renames attached or linked PDF documents into a structured folder.
All processing happens locally on the machine where it is run, with no external data transmission
beyond the necessary browser interaction with the portal. Credentials are loaded from a separate .env file
that is not included in the repository, meaning the script cannot produce results or access any systems
without the proper local configuration and accounts.