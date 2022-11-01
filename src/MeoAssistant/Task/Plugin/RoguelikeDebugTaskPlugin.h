#pragma once
#include "AbstractTaskPlugin.h"

namespace asst
{
    class RoguelikeDebugTaskPlugin : public AbstractTaskPlugin
    {
    public:
        using AbstractTaskPlugin::AbstractTaskPlugin;
        virtual ~RoguelikeDebugTaskPlugin() override = default;

    public:
        virtual bool verify(AsstMsg msg, const json::value& details) const override;

    protected:
        virtual bool _run() override;

    private:
        mutable std::string m_image_path;
    };
}
