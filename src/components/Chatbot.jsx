import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './chatbot.css';

const API_BASE = 'https://e-commbackend-fast-api.vercel.app';

// Suggested quick questions shown when chat is empty
const SUGGESTIONS = [
    "What products do you have?",
    "Show me electronics under ₹2000",
    "How do I use AI Search?",
    "Best rated products?",
    "How do I add to cart?",
];

const Chatbot = () => {
    const [isOpen, setIsOpen]     = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! 👋 I'm BigCart's shopping assistant. Ask me about products, prices, or how to use the store!"
        }
    ]);
    const [input, setInput]       = useState('');
    const [loading, setLoading]   = useState(false);
    const [unread, setUnread]     = useState(0);
    const bottomRef               = useRef(null);
    const inputRef                = useRef(null);

    // Scroll to bottom on new messages
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 200);
            setUnread(0);
        }
    }, [isOpen]);

    const sendMessage = async (text) => {
        const userText = (text || input).trim();
        if (!userText || loading) return;

        const newMessages = [...messages, { role: 'user', content: userText }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const response = await axios.post(`${API_BASE}/chat`, {
                messages: newMessages.map(m => ({ role: m.role, content: m.content }))
            });

            const reply = response.data.reply || "Sorry, I couldn't get a response.";
            setMessages(prev => [...prev, { role: 'assistant', content: reply }]);

            // Show unread badge if chat is closed
            if (!isOpen) setUnread(prev => prev + 1);

        } catch (err) {
            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again." }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const clearChat = () => {
        setMessages([{
            role: 'assistant',
            content: "Hi! 👋 I'm BigCart's shopping assistant. Ask me about products, prices, or how to use the store!"
        }]);
    };

    const showSuggestions = messages.length <= 1;

    return (
        <>
            {/* ── Floating bubble button ── */}
            <button
                className={`chat-bubble ${isOpen ? 'chat-bubble--open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title="Chat with BigCart Assistant"
            >
                {isOpen
                    ? <span className="chat-bubble__icon">✕</span>
                    : <>
                        <span className="chat-bubble__icon">💬</span>
                        {unread > 0 && <span className="chat-bubble__badge">{unread}</span>}
                    </>
                }
            </button>

            {/* ── Chat window ── */}
            {isOpen && (
                <div className="chatbot-window">

                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header__info">
                            <div className="chatbot-header__avatar">✦</div>
                            <div>
                                <div className="chatbot-header__name">BigCart Assistant</div>
                                <div className="chatbot-header__status">
                                    <span className="chatbot-header__dot"></span> Online
                                </div>
                            </div>
                        </div>
                        <button className="chatbot-header__clear" onClick={clearChat} title="Clear chat">
                            🗑
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chatbot-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                                {msg.role === 'assistant' && (
                                    <div className="chatbot-msg__avatar">✦</div>
                                )}
                                <div className="chatbot-msg__bubble">
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {loading && (
                            <div className="chatbot-msg chatbot-msg--assistant">
                                <div className="chatbot-msg__avatar">✦</div>
                                <div className="chatbot-msg__bubble chatbot-msg__bubble--typing">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}

                        {/* Suggestions shown only when conversation is fresh */}
                        {showSuggestions && !loading && (
                            <div className="chatbot-suggestions">
                                {SUGGESTIONS.map((s, i) => (
                                    <button
                                        key={i}
                                        className="chatbot-suggestion"
                                        onClick={() => sendMessage(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="chatbot-input-area">
                        <input
                            ref={inputRef}
                            className="chatbot-input"
                            type="text"
                            placeholder="Ask about products or the store..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                        />
                        <button
                            className={`chatbot-send ${loading || !input.trim() ? 'chatbot-send--disabled' : ''}`}
                            onClick={() => sendMessage()}
                            disabled={loading || !input.trim()}
                        >
                            ➤
                        </button>
                    </div>

                </div>
            )}
        </>
    );
};

export default Chatbot;
