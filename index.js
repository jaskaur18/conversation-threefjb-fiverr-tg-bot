require("dotenv").config()

const { Telegraf, BaseScene, session, Stage } = require('telegraf')
const { BOT_TOKEN, ADMIN_ID } = process.env
const { Keyboard, Key } = require('telegram-keyboard')

const stage = new Stage()
const init = async (bot,) => {

    /**
     * Handlers
     */
    let fbname = new BaseScene("enter-fbname")
    stage.register(fbname)

    /**
    * Midleware
    */
    bot.use(session())
    bot.use(stage.middleware())

    /**
     * Commands
     */
    bot.start(async (ctx) => {
        await ctx.reply(`
For Cold Call Virtual Assistants please  enter: /coldcallers

For Acquisitions Virtual Assistants please  enter: /closers`)
    })


    bot.command("coldcallers", async (ctx) => {

        let keyboard = Keyboard.make([Key.callback("Yes", "coldcallers 1"), Key.callback("No", "coldcallers 2")]).inline()

        ctx.reply(`
Hi ${ctx.from.first_name}, our virtual assistants specialize in cold calling your list of addresses to find your seller. Would you like more information about our VA's?
        `, keyboard)

    })


    bot.action(/coldcallers [0-9]/, async (ctx) => {
        answer = ctx.update.callback_query.data.split(" ")[1]
        if (answer == 1) {

            await ctx.deleteMessage().catch()
            keyboard = Keyboard.make([Key.callback("Yes", "sample 1"), Key.callback("No", "sample 2")]).inline()

            return ctx.reply(`
Here is more information about our VA's:

All of the cold callers are trained using our outbound  script, or you can provide your own.

All agents are trained for Mojo dialer, Call Tools, and Xencall (Readymode).

Before dialing begins the client is responsible for providing the dialer and the list of addresses with associated phone numbers.
All agents come with a lead manager which would be Julie or Sam.
Each lead manager will be in charge of the cold caller agents making sure they are dialing and working on time plus most importantly BRINGING YOU LEADS.
Each day they will provide an excel scorecard showing you how many dials went out and also how many leads each agent submitted, plus they will track all payouts on excel sheets so you know where your money is going each week.
This will help with tracking your KPIs

PRICE:
$497 one time start up fee
When they start it is $3.80 per hour for each agent for Basic Level English
Pay as you go, no contract

Or

$597 one time start up fee
When they start it is $4.50 per hour for each agent for Level 4 English (advanced English, expanded vocabulary, and neutral American accent)
Pay as you go no contract
**To upgrade at anytime, please return here**
$97 one time Upgrade fee
If you currently have Basic Level and would like to upgrade
Please pay agents each Friday
(Julie will send you PayPal info etc)
Availability 5 and in some cases
7 days a week
NO US Holidays
Male and Female agents available
English speaking Philippine call agents
NO contract
Once you sign, you will have support inside the Private group chat to answer any questions you may have while you’re on board with us
They will share important info inside the group chat in facebook or Skype or Podio
Recommended to only have your agents
dial 6 hours a day 5 days a week
from 10am-1pm then back on from 4pm-7pm

--------
Would you like to hear sample recordings?
            
            `, keyboard)

        }
        if (answer == 2) {

            await ctx.deleteMessage().catch()

            ctx.reply(`
Marketing is key to consistent results, we'll be here when you are ready.
If you have any question please message Lisa -MyVirtualDeals.com inside Jae McPherson's Virtual Wholesale Real Estate Telegram Group
Or email Support@MyVirtualDeals.info
        `)

        }

        if (answer == 3) {

            await ctx.deleteMessage().catch()
            keyboard = Keyboard.make([Key.callback("Yes", "sample 3"), Key.callback("No", "sample 4")]).inline()

            ctx.reply(`
            
Here is more information about our Acquisitions Assistants:

Need help closing your leads and getting contracts signed over the phone? The VA team will handle that for you. They are all trained by Jae McPherson.
They are trained to follow up on hot leads, negotiate the price, make profitable offers and get the contract signed over the phone.

From there it’s all in your hands to reach out to title company and find your buyer
The team is trained to analyze the most recent and comparable on-market sales in the area to understand the appropriate offer range for a wholesale deal.
Propstream, Zillow, Redfin and if needed MLS, is what all our team uses to analyze deals. All VA's are continuously trained each week.
PRICE:

$597 one time start up fee
When they start it is $6.50 per hour for each agent for Level 4 English speaking
Pay as you go, no contract
All acquisitions assistants are trained using our closing script, or you can provide your own.

All agents are trained on any dialer you would like them to call from.

All agents come with a lead manager which would be Julie or Sam.

Please pay agents each Friday
(Julie will send you PayPal info etc)
Availability 5 and in some cases
7 days a week
NO US Holidays
Male and Female agents available
English speaking Philippine call agents
NO contract
Once you sign, you will have support inside the Private group chat to answer any questions you may have while you’re on board with us
They will share important info inside the group chat in facebook or Skype or Podio
Recommended to only have your agents
dial 6 hours a day 5 days a week
from 10am-1pm then back on from 4pm-7pm

                        `, keyboard)
        }
        if (answer == 4) {

            await ctx.deleteMessage().catch()
            ctx.reply(`
            Not ready for acquisitions? Our team will be here when you are ready. If you have any question please message Lisa -MyVirtualDeals.com inside Jae McPherson's Virtual Wholesale Real Estate Telegram Group or email Support@MyVirtualDeals.info
                
                    `)
        }
    })



    bot.action(/sample [0-9]/, async (ctx, next) => {
        answer = ctx.update.callback_query.data.split(" ")[1]

        if (answer == 1) {

            await ctx.deleteMessage().catch()
            await ctx.reply("Audio Files.")
            await ctx.replyWithAudio("https://drive.google.com/uc?export=download&id=1itaaMuQ7hffWCwe5suquDlfzLdVmfApU")
            await ctx.replyWithAudio("https://drive.google.com/uc?export=download&id=10Tn5Ph00i6SXpPeBY8mKVU4QNxvNIB6o")
            await ctx.replyWithAudio("https://drive.google.com/uc?export=download&id=1LZ8WHqA48B4suEWGeBVcpkU05AxWKwJ2")
            let keyboard = Keyboard.make([Key.callback("Basic Level English $497", "plan 1"),
            Key.callback("Level 4 English $597", "plan 2"), Key.callback("Upgrade $97 one time Upgrade fee", "plan 3"),
            Key.callback("I am not interested at this time", "plan 4")], { columns: 1 }).inline()

            await ctx.reply(`Which level of cold caller would you like to proceed with?`, keyboard)

        }

        if (answer == 2) {

            await ctx.deleteMessage().catch()
            let keyboard = Keyboard.make([Key.callback("Basic Level English $497", "plan 1"),
            Key.callback("Level 4 English $597", "plan 1"), Key.callback("Upgrade $97 one time Upgrade fee", "plan 1"),
            Key.callback("I am not interested at this time", "plan 1")], { columns: 1 }).inline()

            await ctx.reply(`Which level of cold caller would you like to proceed with?`, keyboard)

        }

        if (answer == 3) {

            await ctx.deleteMessage().catch()
            await ctx.reply("Audio Files.")
            await ctx.replyWithAudio("https://drive.google.com/uc?export=download&id=1_5tw7T3nCXE60ZNHCMs2OuwpkQW1rhCG")
            keyboard = Keyboard.make([Key.callback("Yes", "call 1"), Key.callback("No", "call 2")]).inline()
            await ctx.reply(`Are you currently signed on with our cold call virtual assistants?`, keyboard)

        }

        if (answer == 4) {

            await ctx.deleteMessage().catch()
            keyboard = Keyboard.make([Key.callback("Yes", "call 1"), Key.callback("No", "call 2")]).inline()
            await ctx.reply(`Are you currently signed on with our cold call virtual assistants?`, keyboard)

        }
    })




    bot.action(/plan [0-9]/, async (ctx) => {
        await ctx.deleteMessage().catch()
        plan = ctx.update.callback_query.data.split(" ")[1]

        if (plan == 1) ctx.reply(`https://bit.ly/3jfp1qH`, { disable_web_page_preview: true })
        if (plan == 2) ctx.reply(`https://bit.ly/3G7COIC`, { disable_web_page_preview: true })
        if (plan == 3) ctx.reply(`https://bit.ly/31spvUc`, { disable_web_page_preview: true })
        if (plan == 4) return ctx.reply(`When you are ready please select "/coldcallers" to request your VA's`)

        await ctx.telegram.sendMessage(ADMIN_ID, `
        New User Sumbition ${ctx.from.first_name} ${ctx.from.last_name} (${ctx.from.id}) @${ctx.from.username}
        
        `)

        setTimeout(async () => await ctx.reply(`
Did you complete your order? Thank you.
Please add Jae McPherson's Facebook profile to be added to the private chat group.
Once added, the onboarding processes will begin through the private chat where you will recieve further instruction to begin the process. You can expect onboarding during the normal hours of operation, M-F 9 to 5pm EST.
If you have any questions in the meantime please email us at Support@MyVirtualDeals.com or message Lisa -MyVirtualDeals.com inside Jae McPherson's Virtual Wholesale Telegram Group    
        `), 60 * 1000)
    })




    bot.command('closers', async (ctx) => {

        keyboard = Keyboard.make([Key.callback("Yes", "coldcallers 3"),
        Key.callback("No", "coldcallers 4")]).inline()

        ctx.reply(`
Hi ${ctx.from.first_name}, our acquisitions assistants specialize in acquiring the deal for you. Would you like more information about our acquisitions assistants?    
        `, keyboard)

    })



    bot.action(/call [0-9]/, async (ctx) => {

        await ctx.deleteMessage().catch()
        answer = ctx.update.callback_query.data.split(" ")[1]

        if (answer == 1) {

            await ctx.reply(`Great, please enter your Facebook name so that your lead manager can identify you`)
            return ctx.scene.enter("enter-fbname")
        }

        if (answer == 2) await ctx.reply(`You're about to meet your team!`)

        keyboard = Keyboard.make([Key.callback("Level 4 English Acquisitions Assistant $597", "assistants 1"), Key.callback("No thank you", "assistants 2")], { columns: 1 }).inline()
        await ctx.reply(`
Would you like to proceed with signing on your Acquisitions Assistants?
        `, keyboard)
    })

    fbname.on('message', async (ctx) => {
        ctx.session.data = {}
        ctx.session.data.fbName = ctx.message.text

        keyboard = Keyboard.make([Key.callback("Level 4 English Acquisitions Assistant $597", "assistants 1"), Key.callback("No thank you", "assistants 2")], { columns: 1 }).inline()
        await ctx.reply(`
Would you like to proceed with signing on your Acquisitions Assistants?
        `, keyboard)
        ctx.scene.leave()
    })

    bot.action(/assistants [1-2]/, async (ctx) => {

        await ctx.deleteMessage().catch(err => console.log("err"))
        answer = ctx.update.callback_query.data.split(" ")[1]
        if (answer == 1) {
            await ctx.reply(`https://bit.ly/3DiEnBJ`, { disable_web_page_preview: true })

            setTimeout(async () => await ctx.reply(`
Did you complete your order? Thank you.
Please add Jae McPherson's Facebook profile to be added to the private chat group.
Once added, the onboarding processes will begin through the private chat where you will recieve further instruction to begin the process. You can expect onboarding during the normal hours of operation, M-F 9 to 5pm EST.
If you have any questions in the meantime please email us at Support@MyVirtualDeals.com or message Lisa -MyVirtualDeals.com inside Jae McPherson's Virtual Wholesale Telegram Group    
                    `), 20000)

        }

        if (answer == 2)
            ctx.reply(`When you are ready please select "/closers" to request your Acquisitions Assistants`)

        if (ctx.session.data)
            ctx.telegram.sendMessage(ADMIN_ID, `
New User Sumbition ${ctx.from.first_name} ${ctx.from.last_name} (${ctx.from.id}) @${ctx.from.username}

Fb Name - ${ctx.session.data.fbName}
`)
        else
            await ctx.telegram.sendMessage(ADMIN_ID, `
New User Sumbition ${ctx.from.first_name} ${ctx.from.last_name} (${ctx.from.id}) @${ctx.from.username}
`)
    })
    return bot
}

/**
 * Init bot function.
 *
 * @param {Telegraf} bot The bot instance.
 * @param {Object} dbConfig The knex connection configuration.
 * @return {Promise<Telegraf>} Bot ready to launch.
 */

init(new Telegraf(BOT_TOKEN))
    .then((bot) => {
        /**
         * Run
         */
        bot.launch(console.log("BOt Started Working"))
    })
    .catch(console.log)

module.exports = init